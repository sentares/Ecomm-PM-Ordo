import { createSlice } from '@reduxjs/toolkit'
import { localUserStorage } from '../storage/userStorage'
import { UserDataType } from '../types/type'

const initialState: UserDataType = {
	token: localUserStorage(),
	user: '',
	isAuth: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
		setIsAuth: (state, action) => {
			state.isAuth = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
