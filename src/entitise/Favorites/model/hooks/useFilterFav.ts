import { ThunkDispatch } from '@reduxjs/toolkit'
import { IProduct } from 'entitise/Product/model/type'
import { productAction } from 'features/product-card/model/slices/ProductSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FavoriteState } from '../selector/FavoriteState'

const useFilterFav = () => {
	const { favoriteProducts } = useSelector(FavoriteState)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const updateArr = async (product: IProduct | IProduct[]) => {
		if (Array.isArray(product) && !product[0]?.liked) {
			const updatedProducts = product.map(prod => ({
				...prod,
				liked: favoriteProducts.some(favProd => favProd.id === prod.id),
			}))
			console.log(updatedProducts, 'from updateProducts')
			if (updatedProducts) {
				dispatch(productAction.setData(updatedProducts))
			}
			// В updatedProducts теперь есть копия products с полем liked
		} else if (product) {
			// Обработка, если product не является массивом
		}
	}
	return {
		updateArr,
	}
}

export default useFilterFav
