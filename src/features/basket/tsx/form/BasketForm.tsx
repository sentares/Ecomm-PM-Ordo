import InfoForm from 'features/basket/components/info-form/InfoForm'
import { ResponseDataType } from 'features/product-card/model/types/dataType'
import CountUp from 'react-countup'
import cls from './BasketForm.module.scss'

interface BasketFormProps {
	dataBasket: ResponseDataType[]
	total: number
}

const BasketForm = (props: BasketFormProps) => {
	const { dataBasket, total } = props
	return (
		<div className={cls.totalBlock}>
			<h3>Информация о товаре и доставке:</h3>
			<div className={cls.deliv}>
				Бесплатная доставка от 20 000 сом по г. Бишкек, менее этой суммы
				доставка от 1000 сом по г. Бишкек
			</div>
			<InfoForm />
			<div className={cls.tot}>
				<div className={cls.countProd}>Товары: {dataBasket.length} шт</div>
				<div className={cls.countProd}>
					Номера товаров:
					<ul>
						{dataBasket.map(item => (
							<li key={item.productId} className={cls.prod}>
								{item.productId}
							</li>
						))}{' '}
					</ul>
				</div>
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
