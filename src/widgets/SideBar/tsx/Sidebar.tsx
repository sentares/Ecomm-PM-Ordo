import { FilterState } from 'features/filter/model/selectors/FilterState'
import { useSelector } from 'react-redux'
import cls from './Sidebar.module.scss'

const Slidebar = () => {
	const { isSlidebarOpen } = useSelector(FilterState)

	const toggleSlidebar = () => {
		// Добавьте здесь логику для переключения состояния боковой панели
	}

	return (
		<div className={isSlidebarOpen ? cls.open : cls.Slidebar}>
			<button className='toggle-button' onClick={toggleSlidebar}>
				Toggle Slidebar
			</button>
			{/* Ваш контент боковой панели */}
		</div>
	)
}

export default Slidebar
