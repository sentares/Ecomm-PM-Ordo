import Dashboard from 'features/dashboard/tsx/Dashboard'
import { FilterState } from 'features/filter/model/selectors/FilterState'
import SwiperDefCard from 'features/product-card/ui/tsx/swiper-def-card/SwiperDefCard'
import MainReviewCard from 'features/review/review-card/MainReviewCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'shared/ui/button/Button'
import Advantage from '../components/advantage/Advantage'
import InfoContainer from '../components/info-container/InfoContainer'
import News from '../components/news/tsx/News'
import cls from './MainPage.module.scss'

const MainPage = () => {
	const { isSlidebarOpen } = useSelector(FilterState)
	const testArr = [
		{ id: 1, title: 'hello' },
		{ id: 2, title: 'world' },
		{ id: 3, title: '!!!' },
	]

	const handleClickItem = (id: number) => {
		console.log(id, 'id')
	}

	return (
		<div className={cls.main}>
			{isSlidebarOpen && <div className={cls.blured} />}
			<div className={cls.mainInfo}>
				<Dashboard />
			</div>
			<div className={cls.swiper}>
				<Link to={'/catagery'} className={cls.typeProd}>
					Товары со скидкой
				</Link>
				<SwiperDefCard />
			</div>
			<div className={cls.swiper}>
				<Link to={'/catagery'} className={cls.typeProd}>
					Топ продаж
				</Link>
				<SwiperDefCard />
			</div>
			<div className={cls.news}>
				<Link to={'/catagery'} className={cls.newsLink}>
					Новости
				</Link>
				<News />
			</div>
			<div className={cls.advantage}>
				<p className={cls.text}>Блок преимуществ</p>
				<Advantage />
			</div>
			<div className={cls.review}>
				<div className={cls.revs}>
					<MainReviewCard />
					<MainReviewCard />
					<MainReviewCard />
				</div>
				<div>
					<Button className={cls.button}>Все отзывы</Button>
				</div>
			</div>
			<div className={cls.shortInfo}>
				<InfoContainer />
				<InfoContainer />
				<InfoContainer />
			</div>
		</div>
	)
}

export default MainPage
