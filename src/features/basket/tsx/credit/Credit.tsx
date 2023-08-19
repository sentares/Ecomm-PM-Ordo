//@ts-ignore
import { ReactComponent as Visa } from 'shared/assets/svg/ri_visa-fill.svg'
//@ts-ignore
import { ReactComponent as Master } from 'shared/assets/svg/brandico_mastercard.svg'

import cls from './Credit.module.scss'
import Button from 'shared/ui/button/Button'
const Credit = () => {
	return (
		<div className={cls.credit}>
			<h3>Способ оплаты:</h3>
			<h3>Оплата картой</h3>
			<div className={cls.cards}>
				<Visa />
				<Master />
			</div>
			<Button className={cls.but}>Отправить</Button>
		</div>
	)
}

export default Credit
