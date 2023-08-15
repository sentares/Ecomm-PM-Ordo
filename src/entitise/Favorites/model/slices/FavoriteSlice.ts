import { createSlice } from '@reduxjs/toolkit'
import { FavoriteService } from '../service/favorite.service'
import { FavoriteDataType } from '../types/type'

const initialState: FavoriteDataType = {
	favoriteProducts: [],
	isLoading: false,
	error: '',
}

export const favoriteSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setData: (state, action) => {
			state.favoriteProducts = action.payload
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setError: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { actions: favoriteAction, reducer: favoriteReducer } =
	favoriteSlice

export const getFavoriteProducts = () => async (dispatch: Function) => {
	try {
		dispatch(favoriteAction.setLoading(true))
		const data = await FavoriteService.getProducts()
		dispatch(favoriteAction.setData(data))
		dispatch(favoriteAction.setLoading(false))
	} catch (error) {
		dispatch(favoriteAction.setError('Ошибка запроса. Повторите позже.'))
	}
}
