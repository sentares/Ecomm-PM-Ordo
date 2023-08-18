import { FilterState } from 'features/filter/model/selectors/FilterState'
import SlidebarFilter from 'features/filter/ui/sidebar/tsx/SlidebarFilter'
import { useSelector } from 'react-redux'
import cls from './Sidebar.module.scss'

const Slidebar = () => {
	const { isSlidebarOpen } = useSelector(FilterState)

	return (
		<div className={cls.sidebar}>
			<SlidebarFilter />
		</div>
	)
}

export default Slidebar
