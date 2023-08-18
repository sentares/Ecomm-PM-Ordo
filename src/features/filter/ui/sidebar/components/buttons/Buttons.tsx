import Button from 'shared/ui/button/Button'
import cls from './Buttons.module.scss'

const Buttons = () => {
	return (
		<div className={cls.buttons}>
			<Button className={cls.but_active}>ALL</Button>
			<Button className={cls.but}>BRANDS</Button>
			<Button className={cls.but}>NEW</Button>
		</div>
	)
}

export default Buttons
