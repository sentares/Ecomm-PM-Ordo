import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Products } from 'shared/constant/Products'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import DefCard from '../def-card/tsx/DefCard'
import cls from './SwiperDefCard.module.scss'

const SwiperDefCard = () => {
	const Prod = Products
	const [swipePosition, setSwipePosition] = useState(0)
	const containerWidth = 367 //width of card

	const handleNextClick = () => {
		if (swipePosition < Prod.length - 2) {
			setSwipePosition(prevPosition => prevPosition + 1)
		}
	}

	const handlePrevClick = () => {
		if (swipePosition > 0) {
			setSwipePosition(prevPosition => prevPosition - 1)
		}
	}

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
			<div className={cls.productsContainer} style={{ width: 1081 }}>
				<div
					className={cls.products}
					style={{
						transform: `translateX(-${swipePosition * containerWidth}px)`,
					}}
				>
					{Prod.map((product, index) => (
						<DefCard key={index} product={product} />
					))}
				</div>
			</div>
			<Button
				className={cls.btn}
				onClick={handleNextClick}
				disabled={swipePosition >= Prod.length - 2}
				theme={ButtonTheme.NAV}
			>
				<ArrowRight />
			</Button>
		</div>
	)
}

export default SwiperDefCard
