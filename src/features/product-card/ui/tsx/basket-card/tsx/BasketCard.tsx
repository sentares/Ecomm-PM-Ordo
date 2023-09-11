import { ThunkDispatch } from '@reduxjs/toolkit'
import { IProduct } from 'entitise/Product/model/type'
import RemoveFromCardModal from 'features/product-card/modals/remove-from-card/RemoveFromCardModal'
import {
	addToCart,
	removeFromCart,
} from 'features/product-card/model/slices/ProductSlice'
import { ResponseDataType } from 'features/product-card/model/types/dataType'
import { Trash2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import CounterCard from '../../../components/counter/CounterCard'
import cls from './BasketCard.module.scss'

interface BasketCardProps {
	product: IProduct
	initialCount: number
}
const BasketCard = (props: BasketCardProps) => {
	const { product, initialCount } = props
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const [count, setCount] = useState<number>(0)
	const [openModal, setOpenModal] = useState<boolean>(false)

	useEffect(() => {
		setCount(initialCount)
	}, [initialCount])

	const changeCount = (value: string) => {
		if (value === '-' && count > 0 && product) {
			setCount(prevCount => prevCount - 1)
			addItem({ productId: product.id, count: count - 1, inBasket: true })
			if (count - 1 === 0) {
				setOpenModal(true)
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
	const totalPrice = product.price * count

	const changeModal = () => {
		setOpenModal(!openModal)
	}

	const shortDescription =
		product && product?.description.length > 46
			? product?.description.substring(0, 46) + '...'
			: product?.description

	const handleClickChose = (version: string) => {
		if (version === 'no') {
			setCount(count + 1)
			changeModal()
		} else if (version === 'yes') {
			dispatch(removeFromCart(product.id))
			changeModal()
		} else {
			changeModal()
			setCount(count + 1)
		}
	}

	return (
		<>
			{openModal && <RemoveFromCardModal handleClickChose={handleClickChose} />}
			<div className={cls.basketCard}>
				<div className={cls.imageBlock}>
					<img src={`${product.images[0].image}`} className={cls.image} />
				</div>
				<div className={cls.InfoBlock}>
					<div className={cls.nd}>
						<div className={cls.name}>
							<Link to={`/product/${product.id}`}>{product.name} </Link>
							<div className={cls.trash} onClick={changeModal}>
								<Trash2 />
							</div>
						</div>
						<div className={cls.des}>{shortDescription}</div>
						<div className={cls.shortInf}>
							<div className={cls.price}>
								<CountUp
									decimals={1}
									decimal='.'
									end={product.price}
									duration={0.6}
									separator=','
								/>{' '}
								$
							</div>
							<div></div>
						</div>
					</div>
					<div className={cls.total}>
						<div className={cls.oplata}>
							<CounterCard count={count} changeCount={changeCount} />
							<div className={cls.promo}>
								<Input placeholder='ПРОМОКОД/КУПОН' classOfStyle={'promo'} />
								<Button className={cls.but}>GO</Button>
							</div>
						</div>
						<div className={cls.totPrice}>
							{' '}
							<CountUp
								decimals={1}
								decimal='.'
								end={totalPrice}
								duration={0.6}
								separator=','
							/>{' '}
							$
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BasketCard
