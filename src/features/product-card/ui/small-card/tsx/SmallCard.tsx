import { IProduct } from 'entitise/Product/model/type'
import { useNavigate } from 'react-router'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './SmallCard.module.scss'

interface SmallCardProps {
	product?: IProduct
}
const SmallCard = (props: SmallCardProps) => {
	const { product } = props
	const navigate = useNavigate()
	const shortDescription =
		product && product?.description.length > 24
			? product?.description.substring(0, 24) + '...'
			: product?.description

	const shortName =
		product && product?.name.length > 16
			? product?.name.substring(0, 16) + '...'
			: product?.name

	const navigateTo = () => {
		navigate(`/product/${product?.id}`)
	}

	return (
		<div className={cls.smallCard}>
			<div className={cls.imageBlock}>
				<img
					src={product?.images[0]?.image}
					alt='product image'
					className={cls.img}
				/>
			</div>
			<div className={cls.infoBlock}>
				<div className={cls.nd} onClick={navigateTo}>
					<h2 className={cls.name}>{product ? shortName : 'Name Product'}</h2>
					<p>{product ? shortDescription : 'Product Description'}</p>
				</div>
				<div className={cls.prices}>
					<div className={cls.oldPrice}>$16.48</div>
					<div className={cls.price}>$6.48</div>
				</div>
				<div className={cls.buttonBlock}>
					<Button theme={ButtonTheme.DEFAULT} className={cls.addBtn}>
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SmallCard
