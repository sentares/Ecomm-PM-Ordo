import React from 'react'
import { Advantages as AdvantagesData } from 'shared/constant/Advantages'
import cls from './Advantage.module.scss'

//@ts-ignore
import { ReactComponent as Clover } from 'shared/assets/svg/mdiclover.svg'
//@ts-ignore
import { ReactComponent as Cloud } from 'shared/assets/svg/zondicons_cloud.svg'
//@ts-ignore
import { ReactComponent as Heart } from 'shared/assets/svg/ph_heart-fill.svg'
//@ts-ignore
import { ReactComponent as Star } from 'shared/assets/svg/iconamoon_star-fill.svg'

const Advantage = () => {
	return (
		<div className={cls.adventage}>
			<div className={cls.text}>Блок преимуществ</div>
			<div className={cls.iconBlock}>
				{AdvantagesData.map(item => (
					<div key={item.id} className={cls.andvenData}>
						{(item.icon === 'clover' && <Clover />) ||
							(item.icon === 'cloud' && <Cloud />) ||
							(item.icon === 'heart' && <Heart />) ||
							(item.icon === 'star' && <Star />)}
						<div>{item.title}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Advantage
