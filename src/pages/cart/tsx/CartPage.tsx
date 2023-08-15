import { useSelector } from 'react-redux'
import { ProductState } from 'features/product-card'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import {
	getOneData,
	getProductsToCart,
} from 'features/product-card/model/slices/ProductSlice'
import cls from './CartPage.module.scss'
import BasketCard from 'features/product-card/ui/basket-card/tsx/BasketCard'
import BasketProductsLoader from 'features/product-card/ui/basket-card/skeleton/CardLoader'
import BasketForm from 'features/basket/tsx/form/BasketForm'

const CartPage = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const { basketProducts, dataBasket, isLoading, error } =
		useSelector(ProductState)

	useEffect(() => {
		dataBasket.forEach(item => dispatch(getProductsToCart(item.productId)))
	}, [dataBasket])

	const totalPrice = basketProducts.reduce((total, product) => {
		const basketItem = dataBasket.find(item => item.productId === product.id)
		if (basketItem) {
			return total + product.price * basketItem.count
		}
		return total
	}, 0)

	useEffect(() => {}, [dataBasket])

	return (
		<>
			{dataBasket.length ? (
				<div className={cls.cartPage}>
					{!isLoading || (dataBasket.length && basketProducts.length) ? (
						<div className={cls.blocks}>
							<div className={cls.productsBlock}>
								{basketProducts &&
									basketProducts.map(product => {
										const basketItem = dataBasket.find(
											item => item.productId === product.id && item.count > 0
										)
										return (
											<BasketCard
												key={product.id}
												product={product}
												initialCount={basketItem?.count || 0}
											/>
										)
									})}
							</div>
							<BasketForm prodCount={dataBasket.length} total={totalPrice} />
						</div>
					) : (
						<BasketProductsLoader />
					)}
				</div>
			) : (
				<div className={cls.nothing}>Basket is empty...</div>
			)}
		</>
	)
}

export default CartPage
