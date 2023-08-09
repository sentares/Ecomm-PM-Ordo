import Button from 'shared/ui/button/Button'
import { ButtonTheme } from 'shared/ui/button/Button'
import cls from './NoCountModal.module.scss'

const NoCountModal = () => {
	return (
		<div className={cls.modal}>
			<h2>Chose count</h2>
			<Button theme={ButtonTheme.SMALL}>OK</Button>
		</div>
	)
}

export default NoCountModal
