import NewsLoader from '../skeleton/NewsLoader'
import cls from './News.module.scss'

const News = () => {
	return (
		<div className={cls.news}>
			<NewsLoader />
			<NewsLoader />
			<NewsLoader />
		</div>
	)
}

export default News
