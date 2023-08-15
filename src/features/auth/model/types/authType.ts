import { IUser } from 'entitise/User'

export interface AuthType {
	isLoading: boolean
	error: string
}

export interface AuthForm {
	username?: string
	email?: string
	password: string
}

// export interface ResponseDataType {
// 	response: data
// }
