import { ThunkDispatch } from '@reduxjs/toolkit'
import { ProductState } from 'features/product-card/model/selectors/ProductState'
import { likeProduct } from 'features/product-card/model/slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import ImageBlock from '../components/image-block/tsx/ImageBlock'
import cls from './SoloCard.module.scss'

const SoloProductCard = () => {
	const { oneProduct, isLoading } = useSelector(ProductState)

	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const handleLike = () => {
		dispatch(likeProduct(oneProduct.id))
	}

	return (
		<>
			<div className={cls.SoloProduct}>
				<ImageBlock handleLike={handleLike} />
				<div className={cls.infoBlock}>
					<div className={cls.text}>
						<h1>{oneProduct.name}</h1>
						<p className={cls.des}>{oneProduct.description}</p>
						<p className={cls.price}>{oneProduct.price}$</p>
						<div className={cls.inf}>
							<label>
								Brand: <strong>{oneProduct.brand}</strong>
							</label>
							<label>
								Country: <strong>{oneProduct.issuing_country}</strong>
							</label>
						</div>
						<p className={cls.cat}>Category: {oneProduct.category}</p>
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
