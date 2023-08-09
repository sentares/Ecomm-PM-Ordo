import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
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
		lastName: '',
		email: '',
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

	const { name, lastName, email, password, isSaw } = formData

	return (
		<div className={cls.signInBox}>
			<div className={cls.content}>
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor
				</p>
				<form>
					<div className={cls.nameBlock}>
						<div className={cls.inputs}>
							<Input
								classOfStyle='auth'
								placeholder='Enter Full Name'
								value={name}
								onChange={handleChange}
								name='name'
							/>
						</div>
						<div className={cls.inputs}>
							<Input
								classOfStyle='auth'
								placeholder='Enter Last Name'
								value={lastName}
								onChange={handleChange}
								name='lastName'
							/>
						</div>
					</div>
					<div className={cls.inputs}>
						<Input
							classOfStyle='auth'
							placeholder='Enter email'
							value={email}
							onChange={handleChange}
							name='email'
						/>
					</div>
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
					<Button theme={ButtonTheme.BIG}>{title}</Button>
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
