import { UserState } from 'entitise/User/model/selector/UserState'
import { Home, LogIn, Phone, ShoppingCart, User } from 'lucide-react'
import { useSelector } from 'react-redux'
//@ts-ignore
import { ReactComponent as WhatsapIcon } from 'shared/assets/svg/bi_whatsapp.svg'

interface NavItem {
	id: number
	name: string
	icon?: React.ComponentType<any> | null
	link: string | null
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
		{ id: 2, name: 'select', link: '' },
		{ id: 3, name: 'home', icon: Home, link: '/' },
		{ id: 4, name: 'whatsApp', icon: WhatsapIcon, link: '/whatsapp' },
		{
			id: 5,
			name: 'user',
			icon: isAuth ? userStatus.USER : userStatus.LOGIN,
			link: isAuth ? '/user' : '/signIn',
		},
		{ id: 6, name: 'cart', icon: ShoppingCart, link: '/cart' },
	]
	return { NavList }
}
