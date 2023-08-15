import { IProduct } from 'entitise/Product/model/type'

export type ResponseDataType = {
	productId: number
	count: number
	inBasket: boolean
}

export type ProductDataType = {
	products: IProduct[]
	basketProducts: IProduct[]
	dataBasket: ResponseDataType[]
	isLoading: boolean
	error: string
	oneProduct: IProduct
}
