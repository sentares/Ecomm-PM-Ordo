export type ResponseDataType = {
	productId: string
	count: number
}

export type ProductDataType = {
	data: ResponseDataType[]
	isLoading: boolean
	error: string
}
