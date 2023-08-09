import { Home, Phone, Search, ShoppingCart, User } from 'lucide-react'
import Input from 'shared/ui/Input/Input'
import Select from 'shared/ui/select/Select'
//@ts-ignore
import cls from './Navbar.module.scss'
// @ts-ignore
import { ReactComponent as WhatsapIcon } from 'shared/assets/svg/bi_whatsapp.svg'

const Navbar = () => {
	return (
		<div className={cls.navbar}>
			<div className={cls.logo}></div>
			<div className={cls.search}>
				<Input
					classOfStyle={'search'}
					labelStart={<Search />}
					placeholder='Что вы ищите?'
				/>
			</div>
			<div className={cls.iconBlock}>
				<Phone className={cls.Icons} />
			</div>
			<div>
				<Select />
			</div>
			<div className={cls.iconBlock}>
				<Home className={cls.Icons} />
			</div>
			<div className={cls.iconBlock}>
				<WhatsapIcon className={cls.Icons} />
			</div>
			<div className={cls.iconBlock}>
				<User className={cls.Icons} />
			</div>
			<div className={cls.iconBlock}>
				<ShoppingCart className={cls.Icons} />
			</div>
		</div>
	)
}

export default Navbar
