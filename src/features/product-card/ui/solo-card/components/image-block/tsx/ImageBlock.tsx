import { ThunkDispatch } from '@reduxjs/toolkit'
import { ProductState } from 'features/product-card/model/selectors/ProductState'
import { likeProduct } from 'features/product-card/model/slices/ProductSlice'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhLoader from '../../../skeleton/CardLoader'
import ImageCarusel from '../image-carusel/ImageCarusel'
import cls from './ImageBlock.module.scss'

interface ImageBlockProps {}

const ImageBlock = (props: ImageBlockProps) => {
	const { oneProduct, isLoading } = useSelector(ProductState)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const [activeImage, setActiveImage] = useState<string>('')
	const [liked, setLiked] = useState<boolean>(false)

	const handleChangeImage = (title: string) => {
		setActiveImage(title)
	}

	const handleLike = () => {
		dispatch(likeProduct(oneProduct.id))
		setLiked(!liked)
	}

	useEffect(() => {
		oneProduct && setActiveImage(oneProduct.images[0]?.image)
		oneProduct.liked && setLiked(oneProduct.liked)
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
				<Heart
					cursor='pointer'
					className={cls.like}
					onClick={handleLike}
					style={liked ? { fill: '#af0e0e', color: '#af0e0e' } : {}}
				/>
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
