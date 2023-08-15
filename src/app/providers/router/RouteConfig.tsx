import CartPage from 'pages/cart/tsx/CartPage'
import { MainPage } from 'pages/main'
import { ProductPage } from 'pages/product'
import { SignIn } from 'pages/sign-in'
import { SignUp } from 'pages/sign-up'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	SIGNIN = 'signIn',
	SIGNUP = 'signUp',
	CART = 'cart',
	PRODUCT = 'product',
	// last
	// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SIGNIN]: 'signIn',
	[AppRoutes.SIGNUP]: 'signUp',
	[AppRoutes.CART]: 'cart',
	[AppRoutes.PRODUCT]: 'product/:id',

	// last
	// [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.SIGNIN]: {
		path: RoutePath.signIn,
		element: <SignIn />,
	},
	[AppRoutes.SIGNUP]: {
		path: RoutePath.signUp,
		element: <SignUp />,
	},
	[AppRoutes.CART]: {
		path: RoutePath.cart,
		element: <CartPage />,
	},
	[AppRoutes.PRODUCT]: {
		path: RoutePath.product,
		element: <ProductPage />,
	},
}
