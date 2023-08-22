import { ThunkDispatch } from '@reduxjs/toolkit'
import { IProduct } from 'entitise/Product/model/type'
import { UserState } from 'entitise/User/model/selector/UserState'
import { ProductState } from 'features/product-card/index'
import NoCountModal from 'features/product-card/modals/no-count-modal/NoCountModal'
import {
	addToCart,
	likeProduct,
	removeFromCart,
} from 'features/product-card/model/slices/ProductSlice'
import { ResponseDataType } from 'features/product-card/model/types/dataType'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CounterCard from '../components/counter/CounterCard'
import cls from './DefCard.module.scss'

interface DefCardProps {
	product?: IProduct
}

const DefCard = (props: DefCardProps) => {
	const { product } = props
	const [count, setCount] = useState<number>(0)
	const [openModal, setOpenModal] = useState(false)
	const [liked, setLiked] = useState<boolean>(false)
	const { dataBasket, error, isLoading } = useSelector(ProductState)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const { isAuth } = useSelector(UserState)

	const isProductInBasket = dataBasket.some(
		item => item.productId === product?.id
	)

	const closeModal = () => {
		setOpenModal(false)
	}

	useEffect(() => {
		if (isProductInBasket) {
			const existingItem = dataBasket.find(
				item => item.productId === product?.id
			)
			if (existingItem) {
				setCount(existingItem.count)
			}
		}
	}, [isProductInBasket, dataBasket, product])

	const shortDescription =
		product && product?.description.length > 32
			? product?.description.substring(0, 32) + '...'
			: product?.description

	const changeCount = (value: string) => {
		if (value === '-' && count > 0 && product) {
			setCount(prevCount => prevCount - 1)
			addItem({ productId: product.id, count: count - 1, inBasket: true })
			if (count - 1 === 0) {
				dispatch(removeFromCart(product.id))
			}
		} else if (value === '+' && product) {
			setCount(prevCount => prevCount + 1)
			addItem({ productId: product.id, count: count + 1, inBasket: true })
		}
	}

	const addItem = useCallback(
		(newItem: ResponseDataType) => {
			dispatch(addToCart(newItem))
		},
		[dispatch]
	)

	useEffect(() => {
		product && typeof product.liked === 'boolean' && setLiked(product.liked)
	}, [product])

	const handleAdd = (count: number, isProductInBasket: boolean) => {
		if (count && product) {
			addItem({ productId: product.id, count, inBasket: true })
			if (isProductInBasket) {
				dispatch(removeFromCart(product.id))
				setCount(0)
			}
		} else {
			setOpenModal(true)
			toast('Надо выбрать количество товара')
		}
	}

	const handleLike = (id: number) => {
		if (isAuth) {
			setLiked(!liked)
			dispatch(likeProduct(id))
		} else {
			toast('Чтобы добавить в избранное пройдите регистрацию')
		}
	}

	return (
		<div className={cls.defCard}>
			<div className={cls.imageBlock}>
				<div className={cls.character}>
					<Star width={20} color='orange' fill='orange' />
					Топ продаж
				</div>
				<img
					src={product && product?.images[0]?.image}
					style={{ width: '100%', height: '100%' }}
					className={cls.img}
				/>
				{product && (
					<Heart
						className={liked ? cls.liked : cls.noLiked}
						onClick={handleLike.bind(null, product.id)}
					/>
				)}
			</div>
			<div className={cls.infoBlock}>
				<Link to={`product/${product?.id}`} className={cls.nd}>
					<h2>{product ? product.name : 'Name'}</h2>
					<p className={cls.desc}>
						{product ? shortDescription : 'Description'}
					</p>
				</Link>
				<div className={cls.prices}>
					<div className={cls.endPrice}>{product ? product.price : 12000}$</div>
					<div className={cls.oldPrice}>
						{/* <s>{product ? product.oldPrice : 14000}$</s> */}
					</div>
				</div>
				<div className={cls.counter}>
					{openModal && <NoCountModal closeModal={closeModal} />}
					<CounterCard
						count={count}
						changeCount={changeCount}
						openModal={openModal}
					/>
					<div
						className={
							isProductInBasket && count ? cls.basket_inBasket : cls.basket
						}
						onClick={handleAdd.bind(null, count, isProductInBasket)}
					>
						<ShoppingCart
							width={20}
							height={20}
							color={isProductInBasket && count ? '#fff' : '#000'}
							fontWeight={900}
							cursor='pointer'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DefCard
