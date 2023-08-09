import SmallCard from 'features/product-card/ui/small-card/tsx/SmallCard'
import SwiperDefCard from 'features/product-card/ui/swiper-def-card/SwiperDefCard'
import cls from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={cls.main}>
			<SwiperDefCard />
			<div className={cls.smallCard}>
				<SmallCard />
			</div>
		</div>
	)
}

export default MainPage
