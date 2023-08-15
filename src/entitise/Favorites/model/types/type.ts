import { IProduct } from 'entitise/Product/model/type'

export interface FavoriteDataType {
	favoriteProducts: IProduct[]
	isLoading: boolean
	error: string
}
