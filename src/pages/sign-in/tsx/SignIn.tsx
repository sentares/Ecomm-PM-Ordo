import SignInBox from 'features/auth/tsx/sign-in/tsx/SigInBox'
import { useEffect } from 'react'
import cls from './SignIn.module.scss'

const SignIn = () => {
	useEffect(() => {
		const contentContainer = document.getElementById('content-container')

		if (contentContainer) {
			const containerHeight = contentContainer.clientHeight
			window.scrollTo({ top: containerHeight, behavior: 'smooth' })
		}
	}, [])

	return (
		<div className={cls.sigIn}>
			<div id='content-container'>
				<SignInBox title='SIGN IN' />
			</div>
		</div>
	)
}

export default SignIn
