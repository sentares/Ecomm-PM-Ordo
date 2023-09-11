import { ThunkDispatch } from '@reduxjs/toolkit'
import { ProductState } from 'features/product-card'
import { getOneData } from 'features/product-card/model/slices/ProductSlice'
import SmallCard from 'features/product-card/ui/tsx/small-card/tsx/SmallCard'
import SoloProductCard from 'features/product-card/ui/tsx/solo-card/tsx/SoloCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import cls from './ProductPage.module.scss'

const ProductPage = () => {
	const params = useParams()
	const { id } = params

	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const { products } = useSelector(ProductState)

	useEffect(() => {
		if (id) {
			const numericId = parseInt(id)
			dispatch(getOneData(numericId))
		}
		window.scrollTo(0, 0)
	}, [dispatch, params])

	return (
		<div className={cls.productPage}>
			<SoloProductCard />
			<div className={cls.rec}>
				<p className={cls.lorem}>Lorem ipsum</p>
				<div className={cls.cardBlock}>
					{products.map(item => (
						<SmallCard product={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductPage
