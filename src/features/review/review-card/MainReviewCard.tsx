import { Star } from 'lucide-react'
import cls from './MainReviewCard.module.scss'

const MainReviewCard = () => {
	return (
		<div className={cls.reviewCard}>
			<div className={cls.user} style={{ width: '48px', height: '48px' }}>
				<img src='' alt='' className={cls.img} />
			</div>
			<div className={cls.info}>
				<div className={cls.title}>Lorem ipsum dolor sit amet consectetur.</div>
				<div className={cls.name}>Jack Smith</div>
				<div className={cls.stars}>
					<Star className={cls.star} />
					<Star className={cls.star} />
					<Star className={cls.star} />
					<Star className={cls.star} />
					<Star className={cls.star} />
				</div>
			</div>
		</div>
	)
}

export default MainReviewCard
