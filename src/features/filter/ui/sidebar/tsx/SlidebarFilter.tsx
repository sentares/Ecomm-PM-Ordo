import { filterActions } from 'features/filter/model/slices/FilterSlice'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import { Select } from 'shared/ui/select/Select'
import Buttons from '../components/buttons/Buttons'
import FromTo from '../components/from-to/FromTo'
import Header from '../components/header/Header'
import cls from './SlidebarFilter.module.scss'

interface Option {
	id: number | null
	name: string
}

const SlidebarFilter = () => {
	const dispatch = useDispatch()
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
	const toggleSlidebar = () => {
		dispatch(filterActions.setOpenSidebar(false))
	}
	const [clickedItem, setClickedItem] = useState<Option>({ id: null, name: '' })

	const handleClickeItem = (item: Option) => {
		setClickedItem(item)
	}
	return (
		<div className={cls.forScroll}>
			<div className={cls.slideFilter}>
				<Header toggleSlidebar={toggleSlidebar} />
				<Buttons />
				<div className={cls.selects}>
					<div className={cls.types}>
						Lorem ipsum
						<Select
							placeholder='All types'
							className={cls.select}
							options={optionsCategory}
							handleClickeItem={handleClickeItem}
							clickedItem={clickedItem}
						/>
					</div>
					<div className={cls.types}>
						Brand
						<Select
							placeholder='All Brands'
							className={cls.select}
							options={optionsCategory}
							handleClickeItem={handleClickeItem}
							clickedItem={clickedItem}
						/>
					</div>
					<div className={cls.types}>
						Model
						<Select
							placeholder='All Models'
							className={cls.select}
							options={optionsCategory}
							handleClickeItem={handleClickeItem}
							clickedItem={clickedItem}
						/>
					</div>
				</div>
				<FromTo />
				<div className={cls.selects}>
					<div className={cls.types}>
						Region
						<Select
							placeholder='All types'
							className={cls.select}
							options={optionsCategory}
							handleClickeItem={handleClickeItem}
							clickedItem={clickedItem}
						/>
					</div>
					<div className={cls.types}>
						Country
						<Select
							placeholder='All Brands'
							className={cls.select}
							options={optionsCategory}
							handleClickeItem={handleClickeItem}
							clickedItem={clickedItem}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SlidebarFilter
