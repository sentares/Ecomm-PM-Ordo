import { ThunkDispatch } from '@reduxjs/toolkit'
import { ProductState } from 'features/product-card'
import { getOneData } from 'features/product-card/model/slices/ProductSlice'
import SoloProductCard from 'features/product-card/ui/solo-card/tsx/SoloCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import cls from './ProductPage.module.scss'

const ProductPage = () => {
	const params = useParams()
	const { id } = params

	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const { products, oneProduct, isLoading, error } = useSelector(ProductState)

	useEffect(() => {
		if (id) {
			const numericId = parseInt(id)
			dispatch(getOneData(numericId))
		}
	}, [dispatch])

	return (
		<div className={cls.productPage}>
			<SoloProductCard oneProduct={oneProduct} isLoading={isLoading} />
		</div>
	)
}

export default ProductPage
