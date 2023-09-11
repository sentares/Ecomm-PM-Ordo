//@ts-ignore
import { ReactComponent as BusIcon } from 'shared/assets/svg/002-delivery-truck 1.svg'
//@ts-ignore
import { ReactComponent as Garanty } from 'shared/assets/svg/guarantee.svg'
//@ts-ignore
import { ReactComponent as Credit } from 'shared/assets/svg/credit-card.svg'
//@ts-ignore
import { ReactComponent as States } from 'shared/assets/svg/United-states.svg'
import cls from './DemoInfo.module.scss'

const DemoInfo = () => {
	return (
		<div className={cls.demoInfo}>
			<div className={cls.demos}>
				<div className={cls.dem}>
					<div className={cls.icon}>
						<BusIcon />
					</div>
					Lorem ipsum dolor sit amet consectetur.
				</div>
				<div className={cls.dem}>
					<div className={cls.icon}>
						<Garanty />
					</div>
					Lorem ipsum dolor sit amet consectetur.
				</div>
			</div>
			<div className={cls.demos}>
				<div className={cls.dem}>
					<div className={cls.icon}>
						<Credit />
					</div>
					Lorem ipsum dolor sit amet consectetur.
				</div>
				<div className={cls.dem}>
					<div className={cls.icon}>
						<States />
					</div>
					Lorem ipsum dolor sit amet consectetur.
				</div>
			</div>
		</div>
	)
}

export default DemoInfo
