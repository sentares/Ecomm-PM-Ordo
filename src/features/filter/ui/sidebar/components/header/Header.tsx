import { ChevronLeft } from 'lucide-react'
import cls from './Header.module.scss'

interface HeaderProps {
	toggleSlidebar: () => void
}

const Header = (props: HeaderProps) => {
	const { toggleSlidebar } = props
	return (
		<div className={cls.header}>
			Filters
			<div onClick={toggleSlidebar} className={cls.icon}>
				<ChevronLeft size={28} />
			</div>
		</div>
	)
}

export default Header
