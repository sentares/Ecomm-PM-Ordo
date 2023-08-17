import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { favoriteReducer } from 'entitise/Favorites/model/slices/FavoriteSlice'
import { userReducer } from 'entitise/User'
import { filterReducer } from 'features/filter/model/slices/FilterSlice'
import { productReducer } from 'features/product-card/model/slices/ProductSlice'

import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		productData: productReducer,
		userData: userReducer,
		favoriteData: favoriteReducer,
		filterData: filterReducer,
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		preloadedState: initialState,
	})
}
