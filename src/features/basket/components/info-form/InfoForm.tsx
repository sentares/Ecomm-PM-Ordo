import Button from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import cls from './InfoForm.module.scss'

const InfoForm = () => {
	return (
		<div className={cls.infoForm}>
			<h3>Ваши данные:</h3>
			<form className={cls.form}>
				<Input placeholder='Имя Фамилия' classOfStyle={'promo'} />
				<Input placeholder='Город доставки' classOfStyle={'promo'} />
				<Input placeholder='Адрес доставки' classOfStyle={'promo'} />
				<Input placeholder='Номер телефона' classOfStyle={'promo'} />
			</form>
			<Button className={cls.but}>Отправить</Button>
		</div>
	)
}

export default InfoForm
