import { FilterState } from 'features/filter/model/selectors/FilterState'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import FilterBlock from 'widgets/FilterBlock/tsx/FilterBlock'
import Navbar from 'widgets/NavBar/tsx/Navbar'
import Sidebar from 'widgets/SideBar/tsx/Sidebar'

const Layout = (props: any) => {
	const { children } = props
	const { pathname } = useLocation()
	const { isSlidebarOpen } = useSelector(FilterState)

	return (
		<>
			{pathname === '/' ? (
				<>
					<Navbar />
					{children}
				</>
			) : (
				<div>
					<Navbar />
					<FilterBlock />
					{isSlidebarOpen && <Sidebar />}
					<div className=''>{children}</div>
				</div>
			)}
		</>
	)
}

export default Layout
