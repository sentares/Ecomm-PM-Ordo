import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { productReduser } from 'features/product-card/model/slices/ProductSlice'

import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		productData: productReduser,
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		preloadedState: initialState,
	})
}
