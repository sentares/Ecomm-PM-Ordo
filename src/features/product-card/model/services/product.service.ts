import axios from 'axios'
import { IProduct } from 'entitise/Product/model/type'
import { USER_STORAGE_KEY } from 'entitise/User/model/storage/userStorage'
import { toast } from 'react-hot-toast'
import { HOST } from 'shared/constant/hostApi'
import { loadCartFromLocalStorage } from '../storage/localStorageUtils'
import { ResponseDataType } from '../types/dataType'

export const ProductService = {
	getProducts: async (): Promise<IProduct[]> => {
		const token = localStorage.getItem(USER_STORAGE_KEY)
		const config = token
			? {
					headers: {
						Authorization: `Token ${token}`,
					},
			  }
			: {}

		try {
			if (token) {
				const [productsResponse, favoritesResponse] = await Promise.all([
					axios.get<IProduct[]>(`${HOST}/products`),
					axios.get<IProduct[]>(`${HOST}/favorites/`, config),
				])

				const products = productsResponse.data
				const favoriteProducts = favoritesResponse.data

				const updatedProducts = products.map(prod => ({
					...prod,
					liked: favoriteProducts.some(favProd => favProd.id === prod.id),
				}))

				return updatedProducts
			} else {
				const response = await axios.get<IProduct[]>(`${HOST}/products`)
				return response.data
			}
		} catch (error) {
			console.error('Error:', error)
			return []
		}
	},

	getOneProduct: async (id: number) => {
		const response = await axios.get(`${HOST}/products/${id}`)
		if (response) {
			return response.data
		}
	},

	addToCard: async (item: ResponseDataType) => {
		const dataArray = loadCartFromLocalStorage()

		const updatedDataArray = dataArray.filter(
			product => product.productId !== item.productId
		)

		updatedDataArray.push({
			productId: item.productId,
			count: item.count,
			inBasket: true,
		})

		const serializedData = JSON.stringify(updatedDataArray)
		localStorage.setItem('Cart Data', serializedData)

		return {
			data: updatedDataArray,
		}
	},

	removeFromCard: async (productId: number) => {
		const dataArray = loadCartFromLocalStorage()
		const updatedArray = dataArray.filter(item => item.productId !== productId)

		localStorage.setItem('Cart Data', JSON.stringify(updatedArray))
	},

	likeProduct: async (id: number) => {
		const token = localStorage.getItem(USER_STORAGE_KEY)

		const config = {
			headers: {
				Authorization: `Token ${token}`,
			},
		}

		try {
			const response = await axios.post(
				`${HOST}/products/${id}/add_to_favorites/`,
				null,
				config
			)
			console.log(response)
			toast.success(response.data.detail)
		} catch (error) {
			console.error('Error:', error)
		}
	},
}
