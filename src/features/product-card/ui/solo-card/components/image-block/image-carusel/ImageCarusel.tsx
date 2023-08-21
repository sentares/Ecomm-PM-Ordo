import { Image } from 'entitise/Product/model/type'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './ImageCarusel.module.scss'

interface ImageCaruselProps {
	images: Image[]
	activeImage: string
	handleChangeImage: (title: string) => void
}

const ImageCarusel = (props: ImageCaruselProps) => {
	const { images, activeImage, handleChangeImage } = props

	return (
		<div className={cls.imageCarusel}>
			{images.length > 4 && (
				<Button theme={ButtonTheme.NAV} className={cls.butt}>
					<ChevronLeft />
				</Button>
			)}
			<div>
				{images.map(item => (
					<div
						className={
							activeImage === item.image ? cls.activeImageCard : cls.imageCard
						}
					>
						<img src={item.image} alt='product image' className={cls.img} />
					</div>
				))}
			</div>
			{images.length > 4 && (
				<Button theme={ButtonTheme.NAV} className={cls.butt}>
					<ChevronRight />
				</Button>
			)}
		</div>
	)
}

export default ImageCarusel
