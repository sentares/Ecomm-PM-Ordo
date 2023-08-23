import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'entitise/Product/model/type'
import { toast } from 'react-hot-toast'
import { ProductService } from '../services/product.service' // Убедитесь, что путь верный
import { loadCartFromLocalStorage } from '../storage/localStorageUtils'
import { ProductDataType, ResponseDataType } from '../types/dataType'

const initialState: ProductDataType = {
	dataBasket: loadCartFromLocalStorage(),
	isLoading: true,
	error: '',
	products: [],
	basketProducts: [],
	oneProduct: {
		amount: 0,
		availability: '',
		brand: '',
		category: '',
		description: '',
		id: 0,
		images: [],
		issued_at: '',
		issuing_country: '',
		name: '',
		power: 0,
		price: 0,
		reviews: [],
		size: '',
		state: '',
		store: 0,
		type: '',
		liked: false,
	},
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload
			state.isLoading = false
			state.error = ''
		},
		setOneData: (state, action: PayloadAction<IProduct>) => {
			state.oneProduct = action.payload
			state.isLoading = false
			state.error = ''
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		},
		setLoading: state => {
			state.isLoading = true
		},
		addItem: (state, action: PayloadAction<ResponseDataType>) => {
			const existingProductIndex = state.dataBasket.findIndex(
				item => item.productId === action.payload.productId
			)

			if (existingProductIndex !== -1) {
				state.dataBasket[existingProductIndex] = action.payload
				state.isLoading = false
				state.error = ''
			} else {
				state.isLoading = false
				state.dataBasket.push(action.payload)
				state.error = ''
				toast.success('Товар добавлен в корзину')
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const productIdToRemove = action.payload
			state.dataBasket = state.dataBasket.filter(
				item => item.productId !== productIdToRemove
			)
			state.isLoading = false
			state.error = ''
			toast('Удалено с корзины')
		},
		addOneProduct: (state, action: PayloadAction<IProduct>) => {
			const existingProduct = state.basketProducts.find(
				product => product.id === action.payload.id
			)
			if (!existingProduct) {
				state.basketProducts.push(action.payload)
				state.isLoading = false
				state.error = ''
			}
		},
	},
})

export const { actions: productAction, reducer: productReducer } = productSlice

export const getData = () => async (dispatch: Function) => {
	try {
		dispatch(productAction.setLoading())
		const data = await ProductService.getProducts()
		dispatch(productAction.setData(data))
	} catch (error) {
		dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
	}
}

export const getOneData = (id: number) => async (dispatch: Function) => {
	try {
		dispatch(productAction.setLoading())
		const data = await ProductService.getOneProduct(id)
		if (data) {
			dispatch(productAction.setOneData(data))
		}
	} catch (error) {
		dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
	}
}

export const addToCart =
	(item: ResponseDataType) => async (dispatch: Function) => {
		try {
			dispatch(productAction.setLoading())
			dispatch(productAction.addItem(item))
			await ProductService.addToCard(item)
		} catch (error) {
			dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
		}
	}

export const removeFromCart =
	(productId: number) => async (dispatch: Function) => {
		dispatch(productAction.setLoading())
		dispatch(productAction.removeItem(productId))
		await ProductService.removeFromCard(productId)
	}

export const getProductsToCart = (id: number) => async (dispatch: Function) => {
	try {
		dispatch(productAction.setLoading())
		const data = await ProductService.getOneProduct(id)
		dispatch(productAction.addOneProduct(data))
	} catch (error) {
		dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
	}
}

export const likeProduct = (id: number) => async (dispatch: Function) => {
	try {
		dispatch(productAction.setLoading())
		await ProductService.likeProduct(id)
		const data = await ProductService.getProducts()
		dispatch(productAction.setData(data))
	} catch (error) {
		dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
	}
}
