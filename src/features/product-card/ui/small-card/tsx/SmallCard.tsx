import { IProduct } from 'entitise/Product/model/type'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './SmallCard.module.scss'

interface SmallCardProps {
	product?: IProduct
}
const SmallCard = (props: SmallCardProps) => {
	const { product } = props
	return (
		<div className={cls.smallCard}>
			<div className={cls.imageBlock}></div>
			<div className={cls.infoBlock}>
				<div className={cls.nd}>
					<h2 className={cls.name}>
						{product ? product.name : 'Name Product'}
					</h2>
					<p>{product ? product.description : 'Product Description'}</p>
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
