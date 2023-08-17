import { createSlice } from '@reduxjs/toolkit'
import { FilterDataType } from '../types/type'

const initialState: FilterDataType = {
	isSlidebarOpen: false,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setOpenSidebar: (state, action) => {
			state.isSlidebarOpen = action.payload
		},
	},
})

export const { actions: filterActions, reducer: filterReducer } = filterSlice
