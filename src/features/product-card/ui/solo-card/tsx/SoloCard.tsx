import { ProductState } from 'features/product-card/model/selectors/ProductState'
import { Share2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import DemoInfo from '../components/demo-info/DemoInfo'
import ImageBlock from '../components/image-block/tsx/ImageBlock'
import cls from './SoloCard.module.scss'

const SoloProductCard = () => {
	const { oneProduct, isLoading } = useSelector(ProductState)

	const handleShare = () => {
		const textToCopy = document.documentElement.outerHTML

		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				toast.success('Страница скопирована')
			})
			.catch(error => {
				console.error('Ошибка при копировании: ', error)
			})
	}

	return (
		<>
			<div className={cls.SoloProduct}>
				<ImageBlock />
				<div className={cls.infoBlock}>
					<div className={cls.text}>
						<div className={cls.share} onClick={handleShare}>
							<Share2 fill='#5F5F5F' width={26} height={26} color='#5F5F5F' />
						</div>
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
						<DemoInfo />
					</div>
				</div>
			</div>
		</>
	)
}

export default SoloProductCard
