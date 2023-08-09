import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductService } from '../services/product.service'

import { ProductDataType, ResponseDataType } from '../types/dataType'

const initialState: ProductDataType = {
	data: [],
	isLoading: true,
	error: '',
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<ResponseDataType[]>) => {
			state.data = action.payload
			state.isLoading = false
			state.error = ''
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		},
		addItem: (state, action: PayloadAction<ResponseDataType>) => {
			state.isLoading = true // Set isLoading to true before adding item
			state.data.push(action.payload)
			state.error = ''
		},
	},
})

export const { actions: productAction } = productSlice
export const { reducer: productReduser } = productSlice

export const addTableItem =
	(item: ResponseDataType) =>
	async (
		dispatch: (arg0: {
			payload: string | ResponseDataType
			// type: 'data/setError' | 'data/addItem'
		}) => void
	) => {
		try {
			const { data } = await ProductService.addToCard(item)
			if (data) {
				dispatch(productAction.addItem(data))
			} else {
				dispatch(
					productAction.setError(
						'Поля со звездочкой обязательны для заполнения и не могут быть пустыми!'
					)
				)
			}
		} catch (error) {
			dispatch(productAction.setError('Ошибка запроса. Повторите позже.'))
		}
	}
