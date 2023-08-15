import { Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Input from 'shared/ui/Input/Input'
import { NavConfig } from '../constant/NavConfig'
import cls from './Navbar.module.scss'
import React from 'react'

const Navbar = () => {
	const { NavList } = NavConfig()
	const location = useLocation()

	return (
		<div className={cls.navbar}>
			<Link to={'/'}>
				<div className={cls.logo}>HOME</div>
			</Link>
			<div className={cls.search}>
				<Input
					classOfStyle={'search'}
					labelStart={<Search />}
					placeholder='Что вы ищите?'
				/>
			</div>
			{NavList.map(item => (
				<div
					key={item.id}
					className={`${cls.iconBlock} ${
						location.pathname === item.link ? cls.active : ''
					}`}
				>
					<Link to={item.link ? item.link : ''}>
						{item.icon &&
							React.createElement(item.icon, { className: cls.Icons })}
					</Link>
				</div>
			))}
		</div>
	)
}

export default Navbar
