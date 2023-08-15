import { XCircle } from 'lucide-react'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './RemoveFromCardModal.module.scss'

interface RemoveFromCardModalProps {
	handleClickChose: (arg0: string) => void
}

const RemoveFromCardModal = (props: RemoveFromCardModalProps) => {
	const { handleClickChose } = props
	return (
		<div className={cls.removeModal}>
			<div className={cls.content}>
				<p className={cls.title}>Удалить с корзины</p>
				<div
					className={cls.close}
					onClick={handleClickChose.bind(null, 'close')}
				>
					<XCircle width={32} height={32} />
				</div>
				<p className={cls.desc}>
					Вы действительно хотите удалить продукт с корзины?
				</p>
				<div className={cls.chBlock}>
					<div className={cls.chose}>
						<Button
							theme={ButtonTheme.SMALL}
							className={cls.yes}
							onClick={handleClickChose.bind(null, 'yes')}
						>
							ДА
						</Button>
						<Button
							theme={ButtonTheme.SMALL}
							className={cls.no}
							onClick={handleClickChose.bind(null, 'no')}
						>
							Нет
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RemoveFromCardModal
