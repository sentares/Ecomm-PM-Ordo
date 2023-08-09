import { ThunkDispatch } from '@reduxjs/toolkit'
import { IProduct } from 'entitise/Product/model/type'
import { ProductState } from 'features/product-card/index'
import NoCountModal from 'features/product-card/modals/no-count-modal/NoCountModal'
import { addTableItem } from 'features/product-card/model/slices/ProductSlice'
import { ResponseDataType } from 'features/product-card/model/types/dataType'
import { ShoppingCart, Star } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterCard from '../components/counter/CounterCard'
import cls from './DefCard.module.scss'

interface DefCardProps {
	product?: IProduct
}

const DefCard = (props: DefCardProps) => {
	const { product } = props
	const [count, setCount] = useState<number>(0)
	const [openModal, setOpenModal] = useState<boolean>(false)
	const { data, error, isLoading } = useSelector(ProductState)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const changeCount = (value: string) => {
		if (value === '-' && count > 0) {
			setCount(prevCount => prevCount - 1)
		} else if (value === '+') {
			setCount(prevCount => prevCount + 1)
		}
	}
	const addItem = useCallback(
		(newItem: ResponseDataType) => {
			dispatch(addTableItem(newItem))
		},
		[dispatch]
	)

	const handleAdd = () => {
		if (count) {
			product && addItem && addItem.bind(null, { productId: product.id, count })
		} else {
			setOpenModal(true)
		}
	}

	const isProductInBasket = data.some(item => item.productId === product?.id)

	console.log(data)

	return (
		<div className={cls.defCard}>
			<div className={cls.imageBlock}>
				<div className={cls.character}>
					<Star width={20} color='orange' fill='orange' />
					Топ продаж
				</div>
			</div>
			<div className={cls.infoBlock}>
				<div className={cls.nd}>
					<h2>{product ? product.name : 'Name'}</h2>
					<p>{product ? product.description : 'Description'}</p>
				</div>
				<div className={cls.prices}>
					<div className={cls.endPrice}>{product ? product.price : 12000}$</div>
					<div className={cls.oldPrice}>
						<s>{product ? product.oldPrice : 14000}$</s>
					</div>
				</div>
				<div className={cls.counter}>
					{openModal && <NoCountModal />}
					<CounterCard count={count} changeCount={changeCount} />
					<div
						className={isProductInBasket ? cls.basket_inBasket : cls.basket}
						onClick={handleAdd}
						color={isProductInBasket ? '#7B7C7E' : '#000'}
					>
						<ShoppingCart
							width={20}
							height={20}
							color={isProductInBasket ? '#fff' : '#000'}
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
