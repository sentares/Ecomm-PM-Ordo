import SlidebarFilter from 'features/filter/ui/sidebar/tsx/SlidebarFilter'
import cls from './Sidebar.module.scss'

const Slidebar = () => {
	return (
		<div className={cls.sidebar}>
			<SlidebarFilter />
		</div>
	)
}

export default Slidebar
