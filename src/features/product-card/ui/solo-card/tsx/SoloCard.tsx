import { IProduct } from 'entitise/Product/model/type'
import Button from 'shared/ui/button/Button'
import PhLoader from '../skeleton/CardLoader'
import SoloCardLoader from '../skeleton/CardLoader'
import { ButtonTheme } from 'shared/ui/button/Button'
import cls from './SoloCard.module.scss'
import { Heart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { likeProduct } from 'features/product-card/model/slices/ProductSlice'

interface SoloProductProps {
	oneProduct: IProduct
	isLoading: boolean
}

const SoloProductCard = (props: SoloProductProps) => {
	const { oneProduct, isLoading } = props
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const handleLike = () => {
		dispatch(likeProduct(oneProduct.id))
	}

	return (
		<>
			<div className={cls.SoloProduct}>
				<div className={cls.imageBlock}>
					<div className={cls.mainImage}>
						{!isLoading && oneProduct ? (
							oneProduct.images && (
								<img
									src={`${oneProduct.images[0]?.image}`}
									className={cls.image}
								/>
							)
						) : (
							<PhLoader />
						)}
						<Heart cursor='pointer' className={cls.like} onClick={handleLike} />
					</div>
				</div>
				<div className={cls.infoBlock}>
					<div className={cls.text}>
						<h1>{oneProduct.name}</h1>
						<p className={cls.des}>{oneProduct.description}</p>
						<div className={cls.inf}>
							<label>Brand: {oneProduct.brand}</label>
							<label>Country: {oneProduct.issuing_country}</label>
						</div>
						<p className={cls.price}>{oneProduct.price}$</p>
					</div>
					<div className={cls.actions}>
						<div className={cls.buy}>
							<Button theme={ButtonTheme.DEFAULT}>Buy</Button>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SoloProductCard
