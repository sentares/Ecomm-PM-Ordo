import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './CounterCard.module.scss'

interface CounterCardProps {
	count: number
	openModal?: boolean
	changeCount: (value: string) => void
}

const CounterCard = (props: CounterCardProps) => {
	const { count, openModal, changeCount } = props
	return (
		<div className={cls.counterCard}>
			<Button
				theme={ButtonTheme.COUNTERLEFT}
				onClick={changeCount.bind(null, '-')}
				disabled={openModal}
			>
				-
			</Button>
			<div
				className={cls.counter}
				style={openModal ? { color: '#AF0E0E' } : {}}
			>
				{count}
			</div>
			<Button
				theme={ButtonTheme.COUNTERRIGHT}
				onClick={changeCount.bind(null, '+')}
				disabled={openModal}
			>
				+
			</Button>
		</div>
	)
}

export default CounterCard
