//@ts-ignore
import cls from './SignIn.module.scss'

import SignInBox from 'features/auth/sign-in/tsx/SigInBox'

const SignIn = () => {
	return (
		<div className={cls.sigIn}>
			<SignInBox title='SIGN IN' />
		</div>
	)
}

export default SignIn
