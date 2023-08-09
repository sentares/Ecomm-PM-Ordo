export interface IProduct {
	id: string
	name: string
	description: string
	price: string | number
	oldPrice?: string | number
	discond: boolean
	hit?: boolean
}
