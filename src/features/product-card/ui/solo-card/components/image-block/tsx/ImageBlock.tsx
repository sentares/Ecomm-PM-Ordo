import { IProduct } from 'entitise/Product/model/type'
import { ProductState } from 'features/product-card/model/selectors/ProductState'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PhLoader from '../../../skeleton/CardLoader'
import ImageCarusel from '../image-carusel/ImageCarusel'
import cls from './ImageBlock.module.scss'

interface ImageBlockProps {
	handleLike: () => void
}

const ImageBlock = (props: ImageBlockProps) => {
	const { handleLike } = props
	const { oneProduct, isLoading } = useSelector(ProductState)

	const [activeImage, setActiveImage] = useState<string>('')

	const handleChangeImage = (title: string) => {
		setActiveImage(title)
	}

	useEffect(() => {
		oneProduct && setActiveImage(oneProduct.images[0]?.image)
	}, [oneProduct])

	return (
		<div className={cls.imageBlock}>
			<div className={cls.mainImage}>
				{!isLoading && oneProduct ? (
					oneProduct.images?.length && (
						<img src={activeImage} className={cls.image} />
					)
				) : (
					<PhLoader />
				)}
				<Heart cursor='pointer' className={cls.like} onClick={handleLike} />
			</div>
			<ImageCarusel
				images={oneProduct.images}
				activeImage={activeImage}
				handleChangeImage={handleChangeImage}
			/>
		</div>
	)
}

export default ImageBlock
