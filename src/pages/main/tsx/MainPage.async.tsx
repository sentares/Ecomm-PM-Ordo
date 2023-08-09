import { lazy } from 'react'

export const MainPageAsync = lazy(
	() =>
		// @ts-ignore
		import('./MainPage')
)
