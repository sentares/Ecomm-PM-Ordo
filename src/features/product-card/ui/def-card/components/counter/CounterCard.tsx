import Button, { ButtonTheme } from 'shared/ui/button/Button'
import cls from './CounterCard.module.scss'

interface CounterCardProps {
	count: number
	changeCount: (value: string) => void
}

const CounterCard = (props: CounterCardProps) => {
	const { count, changeCount } = props
	return (
		<div className={cls.counterCard}>
			<Button
				theme={ButtonTheme.COUNTERLEFT}
				onClick={changeCount.bind(null, '-')}
			>
				-
			</Button>
			<div className={cls.counter}>{count}</div>
			<Button
				theme={ButtonTheme.COUNTERRIGHT}
				onClick={changeCount.bind(null, '+')}
			>
				+
			</Button>
		</div>
	)
}

export default CounterCard
