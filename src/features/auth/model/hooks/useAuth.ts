import axios from 'axios'
import { userActions } from 'entitise/User'
import { UserState } from 'entitise/User/model/selector/UserState'
import { USER_STORAGE_KEY } from 'entitise/User/model/storage/userStorage'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { HOST } from 'shared/constant/hostApi'
import { AuthForm } from '../types/authType'

const useAuth = () => {
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const register = async (data: AuthForm) => {
		const { username, password } = data
		try {
			setIsLoading(true)
			const response = await axios.post(`${HOST}/register/`, {
				username,
				password,
			})
			if (response) {
				console.log(response.data)

				dispatch(userActions.setUser(response.data.user))
				dispatch(userActions.setIsAuth(true))
				toast.success(response.data.message)
				navigate('/signIn')
			}
		} catch (error) {
			console.error('Error:', error)
			toast.error(`Пользователь с именем ${username} уже существует`)
		} finally {
			setIsLoading(false)
		}
	}

	const login = async (data: AuthForm) => {
		const { username, password } = data
		try {
			setIsLoading(true)
			const response = await axios.post(`${HOST}/login/`, {
				username,
				password,
			})
			if (response.data.token) {
				dispatch(userActions.setToken(response.data.token))
				localStorage.setItem(USER_STORAGE_KEY, response.data.token)
				dispatch(userActions.setIsAuth(true))
				toast.success(response.data.message)
				navigate('/')
			}
		} catch (error) {
			console.error('Error:', error)
			toast.error('Не верная почта или пароль')
		} finally {
			setIsLoading(false)
		}
	}

	return { register, login, isLoading }
}

export default useAuth
