//@ts-ignore
import { ThunkDispatch } from '@reduxjs/toolkit'
import { FilterState } from 'features/filter/model/selectors/FilterState'
import { filterActions } from 'features/filter/model/slices/FilterSlice'
import { DropDown } from 'features/filter/ui/block/tsx/dropDown/DropDown'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//@ts-ignore
import { ReactComponent as SliderIcon } from 'shared/assets/svg/mifilter.svg'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import Slidebar from 'widgets/SideBar/tsx/Sidebar'
import cls from './FilterBlock.module.scss'

const FilterBlock = () => {
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
	const optionsCountry = [
		{ id: 1, name: 'Кыргызстан' },
		{
			id: 2,
			name: 'Казахстан',
		},
		{
			id: 3,
			name: 'Россия',
		},
		{
			id: 4,
			name: 'США',
		},
		{
			id: 5,
			name: 'Китай',
		},
		{
			id: 6,
			name: 'Мексика',
		},
	]

	const optionsCity = [
		{ id: 1, name: 'Бишкек' },
		{
			id: 2,
			name: 'Астана',
		},
		{
			id: 3,
			name: 'Москва',
		},
	]

	const [activeDropdown, setActiveDropdown] = useState('')
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const handleDropdownClick = (dropdownId: string) => {
		setActiveDropdown(dropdownId)
	}

	const closeDropdowns = () => {
		setActiveDropdown('')
	}

	const handleClickFilterIcon = () => {
		dispatch(filterActions.setOpenSidebar(!isSlidebarOpen))
	}

	const { isSlidebarOpen } = useSelector(FilterState)

	return (
		<div className={cls.filterContainer}>
			<div
				className={`${cls.slidebar} ${
					isSlidebarOpen ? cls['slidebar-open'] : ''
				}`}
			>
				<Slidebar />
			</div>
			<div className={cls.filterBlock}>
				<div className={cls.icon} onClick={handleClickFilterIcon}>
					<SliderIcon />
				</div>
				<div className={cls.dropBlock}>
					<DropDown
						placeholder='Country'
						options={optionsCountry}
						isActive={activeDropdown === 'country'}
						onClick={handleDropdownClick.bind(null, 'country')}
						onClose={closeDropdowns}
					/>
				</div>
				<div className={cls.dropBlock}>
					<DropDown
						placeholder='City'
						options={optionsCity}
						isActive={activeDropdown === 'city'}
						onClick={handleDropdownClick.bind(null, 'city')}
						onClose={closeDropdowns}
					/>{' '}
				</div>
				<div className={cls.dropBlock}>
					<DropDown
						placeholder='Category'
						options={optionsCategory}
						isActive={activeDropdown === 'category'}
						onClick={handleDropdownClick.bind(null, 'category')}
						onClose={closeDropdowns}
					/>
				</div>
				<div className={cls.seacrh}>
					<Input
						labelStart={<Search />}
						classOfBlock='split'
						placeholder='search'
						className={cls.searchInput}
					/>
				</div>
				<div>
					<Button theme={ButtonTheme.DEFAULT} className={cls.button}>
						Search
					</Button>
				</div>
			</div>
		</div>
	)
}

export default FilterBlock
