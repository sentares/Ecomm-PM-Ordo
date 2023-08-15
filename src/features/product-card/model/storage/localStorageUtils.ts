import { ResponseDataType } from '../types/dataType'

const CART_STORAGE_KEY = 'Cart Data'

export const loadCartFromLocalStorage = (): ResponseDataType[] => {
	const storedData = localStorage.getItem(CART_STORAGE_KEY)
	return storedData ? JSON.parse(storedData) : []
}
