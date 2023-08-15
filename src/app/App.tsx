import { ThunkDispatch } from '@reduxjs/toolkit'
import { userActions } from 'entitise/User'
import { UserState } from 'entitise/User/model/selector/UserState'
import { getData } from 'features/product-card/model/slices/ProductSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from 'widgets/NavBar/tsx/Navbar'
import './index.scss'
import { AppRouter } from './providers/router'
import ToastProvier from './providers/toast'

function App() {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const { token } = useSelector(UserState)

	useEffect(() => {
		if (token?.length) {
			dispatch(userActions.setIsAuth(true))
			dispatch(getData())
		}
		dispatch(getData())
	}, [])

	return (
		<div>
			<ToastProvier />
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
