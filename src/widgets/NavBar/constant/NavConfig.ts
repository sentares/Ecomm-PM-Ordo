import { UserState } from 'entitise/User/model/selector/UserState'
import { Home, LogIn, Phone, ShoppingCart, User } from 'lucide-react'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
// @ts-ignore
import { ReactComponent as WhatsapIcon } from 'shared/assets/svg/bi_whatsapp.svg'
import { Select } from 'shared/ui/select/Select'

interface NavItem {
	id: number
	name?: string
	icon?: React.ComponentType<any>
	link?: string
	component?: string
}

export enum userStatus {
	//@ts-ignore
	LOGIN = LogIn,
	// @ts-ignore
	USER = User,
}

export const NavConfig = () => {
	const { isAuth, token } = useSelector(UserState)

	const NavList: NavItem[] = [
		{
			id: 1,
			name: 'phone',
			icon: Phone,
			link: '/phone',
		},
		{ id: 2, name: 'select', component: 'Select' },
		{ id: 3, name: 'home', icon: Home, link: '/' },
		{ id: 4, name: 'whatsApp', icon: WhatsapIcon, link: '/whatsapp' },
		{ id: 5, name: 'cart', icon: ShoppingCart, link: '/cart' },
		{
			id: 6,
			name: 'user',
			icon: isAuth ? userStatus.USER : userStatus.LOGIN,
			link: isAuth ? '/user' : '/signIn',
		},
	]
	return { NavList }
}
