import useAuth from 'features/auth/model/hooks/useAuth'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Button, { ButtonTheme } from 'shared/ui/button/Button'
import Input from 'shared/ui/Input/Input'
import cls from './SignInBox.module.scss'
interface SignInBoxProps {
	title: string
}

const SignInBox = ({ title }: SignInBoxProps) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		isSaw: false,
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const togglePasswordVisibility = () => {
		setFormData(prevData => ({ ...prevData, isSaw: !prevData.isSaw }))
	}

	const { username, password, isSaw } = formData

	const { login, isLoading } = useAuth()

	const handleClickAuth = () => {
		if (username.trim().length && password.trim().length) {
			login({ username, password })
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
					<div className={cls.inputs}>
						<Input
							labelStart={<Mail style={{ width: 37, height: 37 }} />}
							classOfStyle='auth'
							placeholder='Enter username'
							value={username}
							onChange={handleChange}
							name='username'
						/>
					</div>
					<div className={cls.inputs}>
						<Input
							labelStart={<Lock style={{ width: 37, height: 37 }} />}
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
				<div className={cls.checkBox}>
					<Input
						type='checkbox'
						classOfStyle='checkBoxAuth'
						classOfBlock='split'
					/>
					Forget Password
				</div>
				<div className={cls.buttonBlock}>
					<Button
						theme={ButtonTheme.BIG}
						onClick={handleClickAuth}
						disabled={isLoading}
					>
						Sign In
					</Button>
				</div>
				<p className={cls.haveAcc}>
					Don’t have an account?
					<Link to={'/signUp'} className={cls.link}>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SignInBox
