import CountUp from 'react-countup'
import cls from './BasketForm.module.scss'

interface BasketFormProps {
	prodCount: number
	total: number
}

const BasketForm = (props: BasketFormProps) => {
	const { prodCount, total } = props
	return (
		<div className={cls.totalBlock}>
			<h2>Информация о товаре и доставке:</h2>
			<div className={cls.deliv}>
				Бесплатная доставка от 20 000 сом по г. Бишкек, менее этой суммы
				доставка от 1000 сом по г. Бишкек
			</div>
			<div className={cls.tot}>
				<div className={cls.countProd}>Товары: {prodCount} шт</div>
				<div className={cls.total}>
					Итого:{' '}
					<CountUp
						decimals={1}
						decimal='.'
						end={total}
						duration={0.6}
						separator=','
					/>{' '}
					$
				</div>
			</div>
		</div>
	)
}

export default BasketForm
