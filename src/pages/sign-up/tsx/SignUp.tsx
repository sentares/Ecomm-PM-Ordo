import SignUpBox from 'features/auth/tsx/sign-up/tsx/SignUpBox'
import { useEffect } from 'react'
import cls from './SignUp.module.scss'

const SignUp = () => {
	useEffect(() => {
		const contentContainer = document.getElementById('content-container')

		if (contentContainer) {
			const containerHeight = contentContainer.clientHeight
			window.scrollTo({ top: containerHeight, behavior: 'smooth' })
		}
	}, [])

	return (
		<div className={cls.sigUp}>
			<div id='content-container'>
				<SignUpBox title='SIGN UP' />
			</div>
		</div>
	)
}

export default SignUp
