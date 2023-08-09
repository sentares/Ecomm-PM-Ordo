import { ResponseDataType } from '../types/dataType'

export const ProductService = {
	addToCard: async (item: ResponseDataType) => {
		const data: ResponseDataType = {
			productId: item.productId,
			count: item.count,
		}
		return {
			data,
		}
	},
}
