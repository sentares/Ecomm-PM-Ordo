import { ProductState } from 'features/product-card/model/selectors/ProductState'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import CardLoader from '../def-card/skeleton/PhLoader'
import DefCard from '../def-card/tsx/DefCard'
import cls from './SwiperDefCard.module.scss'

const SwiperDefCard = () => {
	const [swipePosition, setSwipePosition] = useState(0)
	const containerWidth = 367 //width of card

	const handleNextClick = () => {
		if (swipePosition < products.length - 2) {
			setSwipePosition(prevPosition => prevPosition + 1)
		}
	}

	const handlePrevClick = () => {
		if (swipePosition > 0) {
			setSwipePosition(prevPosition => prevPosition - 1)
		}
	}

	const { products } = useSelector(ProductState)

	return (
		<div className={cls.swiper}>
			<Button
				className={cls.btn}
				onClick={handlePrevClick}
				disabled={swipePosition === 0}
				theme={ButtonTheme.NAV}
			>
				<ArrowLeft />
			</Button>
			<div className={cls.productsContainer} style={{ width: 1102 }}>
				<div
					className={cls.products}
					style={{
						transform: `translateX(-${swipePosition * containerWidth}px)`,
					}}
				>
					{products.length ? (
						products.map((product, index) => (
							<DefCard key={index} product={product} />
						))
					) : (
						<>
							<CardLoader />
							<CardLoader />
							<CardLoader />
						</>
					)}
				</div>
			</div>
			<Button
				className={cls.btn}
				onClick={handleNextClick}
				disabled={swipePosition >= products.length - 2}
				theme={ButtonTheme.NAV}
			>
				<ArrowRight />
			</Button>
		</div>
	)
}

export default SwiperDefCard
