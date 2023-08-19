import { ThunkDispatch } from '@reduxjs/toolkit'
import Credit from 'features/basket/tsx/credit/Credit'
import BasketForm from 'features/basket/tsx/form/BasketForm'
import { ProductState } from 'features/product-card'
import { getProductsToCart } from 'features/product-card/model/slices/ProductSlice'
import BasketProductsLoader from 'features/product-card/ui/basket-card/skeleton/CardLoader'
import BasketCard from 'features/product-card/ui/basket-card/tsx/BasketCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cls from './CartPage.module.scss'

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

	return (
		<div className={cls.cart}>
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
							<div className={cls.formBlock}>
								<BasketForm dataBasket={dataBasket} total={totalPrice} />
								<Credit />
							</div>
						</div>
					) : (
						<div className={cls.loader}>
							<BasketProductsLoader />
						</div>
					)}
				</div>
			) : (
				<div className={cls.nothing}>Basket is empty...</div>
			)}
		</div>
	)
}

export default CartPage
