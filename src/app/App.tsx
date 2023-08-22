import { ThunkDispatch } from '@reduxjs/toolkit'
import { userActions, UserState } from 'entitise/User'
import { getData } from 'features/product-card/model/slices/ProductSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import Layout from './layout/Layout'
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
			<Layout>
				<AppRouter />
			</Layout>
		</div>
	)
}

export default App
