import { Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Input from 'shared/ui/Input/Input'
import { NavConfig } from '../constant/NavConfig'
import cls from './Navbar.module.scss'
import React from 'react'
import { Select } from 'shared/ui/select/Select'

const Navbar = () => {
	const { NavList } = NavConfig()
	const location = useLocation()
	const optionsCategory = [
		{ id: 1, name: 'Мебель' },
		{
			id: 2,
			name: 'Оборудование',
		},
		{
			id: 3,
			name: 'Вентиляция',
		},
	]

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
				<div key={item.id} className={cls.itemBl}>
					{item.link && (
						<Link
							to={item.link ? item.link : ''}
							className={`${cls.iconBlock} ${
								location.pathname === item.link ? cls.active : ''
							}`}
						>
							{item.icon &&
								React.createElement(item.icon, { className: cls.Icons })}
						</Link>
					)}
					{item.component === 'Select' && (
						<Select
							placeholder='Время работы'
							options={optionsCategory}
							className={cls.navSelect}
							listStyles={{
								position: 'absolute',
							}}
						/>
					)}
				</div>
			))}
		</div>
	)
}

export default Navbar
