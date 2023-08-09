import SignUpBox from 'features/auth/sign-up/tsx/SignUpBox'
import cls from './SignUp.module.scss'

const SignUp = () => {
	return (
		<div className={cls.sigUp}>
			<SignUpBox title='SIGN UP' />
		</div>
	)
}

export default SignUp
