import useAuth from 'features/auth/model/hooks/useAuth'
import { AuthForm } from 'features/auth/model/types/authType'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import cls from './SignUpBox.module.scss'

interface SignUpBoxProps {
	title: string
}

const SignUpBox = ({ title }: SignUpBoxProps) => {
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		isSaw: false,
	})

	const { register, isLoading } = useAuth()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const togglePasswordVisibility = () => {
		setFormData(prevData => ({ ...prevData, isSaw: !prevData.isSaw }))
	}

	const { name, username, email, password, isSaw } = formData

	const clickAuth = (item: AuthForm) => {
		register(item)
	}

	const handleClickAuth = () => {
		if (
			username.trim().length &&
			// email.trim().length &&
			password.trim().length
		) {
			clickAuth({ username, email, password })
		} else {
			toast('Заполните все поля')
		}
	}

	return (
		<div className={cls.signInBox}>
			<div className={cls.content}>
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor
				</p>
				<form>
					{/* <div className={cls.nameBlock}>
						<div className={cls.inputs}>
							<Input
								classOfStyle='auth'
								placeholder='Enter Full Name'
								value={name}
								onChange={handleChange}
								name='name'
							/>
						</div> */}
					<div className={cls.inputs}>
						<Input
							classOfStyle='auth'
							placeholder='Enter User Name'
							value={username}
							onChange={handleChange}
							name='username'
						/>
					</div>
					{/* </div> */}
					{/* <div className={cls.inputs}>
						<Input
							classOfStyle='auth'
							placeholder='Enter email'
							value={email}
							onChange={handleChange}
							name='email'
						/>
					</div> */}
					<div className={cls.inputs}>
						<Input
							classOfStyle='auth'
							placeholder='Enter Password'
							value={password}
							onChange={handleChange}
							type={!isSaw ? 'password' : ''}
							name='password'
						/>
						{!isSaw ? (
							<Eye
								style={{ width: 27, height: 27 }}
								onClick={togglePasswordVisibility}
								cursor='pointer'
							/>
						) : (
							<EyeOff
								style={{ width: 27, height: 27 }}
								onClick={togglePasswordVisibility}
								cursor='pointer'
							/>
						)}
					</div>
				</form>
				<div className={cls.buttonBlock}>
					<Button
						theme={ButtonTheme.BIG}
						onClick={handleClickAuth}
						disabled={isLoading}
					>
						{title}
					</Button>
				</div>
				<p className={cls.haveAcc}>
					Don’t have an account?
					<Link to={'/signIn'} className={cls.link}>
						Sign In
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SignUpBox
