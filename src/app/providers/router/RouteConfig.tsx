import { MainPage } from 'pages/main'
import { SignIn } from 'pages/sign-in'
import { SignUp } from 'pages/sign-up'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	SIGNIN = 'signIn',
	SIGNUP = 'signUp',

	// last
	// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SIGNIN]: 'signIn',
	[AppRoutes.SIGNUP]: 'signUp',

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
}
