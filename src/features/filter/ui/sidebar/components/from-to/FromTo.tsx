import Input from 'shared/ui/Input/Input'
import cls from './FromTo.module.scss'

const FromTo = () => {
	return (
		<>
			<div className={cls.fromTo}>
				<div className={cls.ft}>
					Price from
					<Input
						placeholder='1'
						type='number'
						min={1}
						classOfStyle={'fromTo'}
					/>
				</div>
				<div className={cls.ft}>
					Price to
					<Input
						placeholder='2'
						type='number'
						min={2}
						classOfStyle={'fromTo'}
					/>{' '}
				</div>
			</div>
			<div className={cls.fromTo}>
				<div className={cls.ft}>
					Year from
					<Input
						placeholder='1'
						type='number'
						min={1}
						classOfStyle={'fromTo'}
					/>
				</div>
				<div className={cls.ft}>
					Year to
					<Input
						placeholder='2'
						type='number'
						min={2}
						classOfStyle={'fromTo'}
					/>
				</div>
			</div>
		</>
	)
}

export default FromTo
