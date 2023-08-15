import Button from 'shared/ui/button/Button'
import { ButtonTheme } from 'shared/ui/button/Button'
import cls from './NoCountModal.module.scss'

interface NoCountModalProps {
	closeModal: () => void
}

const NoCountModal = (props: NoCountModalProps) => {
	const { closeModal } = props
	return (
		<div className={`${cls.modal} ${cls.open}`}>
			<h2>Chose count</h2>
			<Button theme={ButtonTheme.SMALL} onClick={closeModal}>
				OK
			</Button>
		</div>
	)
}

export default NoCountModal
