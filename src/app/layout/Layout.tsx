import { FilterState } from 'features/filter/model/selectors/FilterState'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import FilterBlock from 'widgets/FilterBlock/tsx/FilterBlock'
import Footer from 'widgets/Footer/tsx/Footer'
import Navbar from 'widgets/NavBar/tsx/Navbar'
import Sidebar from 'widgets/SideBar/tsx/Sidebar'

const Layout = (props: any) => {
	const { children } = props
	const { pathname } = useLocation()
	const { isSlidebarOpen } = useSelector(FilterState)

	const isProductPage = pathname.startsWith('/product/')

	return (
		<>
			{pathname === '/signIn' ||
			pathname === '/signUp' ||
			pathname === '/cart' ||
			isProductPage ? (
				<>
					<Navbar />
					{children}
				</>
			) : (
				<div>
					<Navbar />
					<FilterBlock />
					<div className=''>{children}</div>
					<Footer />
				</div>
			)}
		</>
	)
}

export default Layout
