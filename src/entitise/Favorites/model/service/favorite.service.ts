import axios from 'axios'
import { USER_STORAGE_KEY } from 'entitise/User/model/storage/userStorage'
import { toast } from 'react-hot-toast'
import { HOST } from 'shared/constant/hostApi'

export const FavoriteService = {
	getProducts: async () => {
		const token = localStorage.getItem(USER_STORAGE_KEY)

		const config = {
			headers: {
				Authorization: `Token ${token}`,
			},
		}

		try {
			const response = await axios.get(`${HOST}/favorites/`, config)
			return response.data
			// toast.success(response.data.detail)
		} catch (error) {
			console.error('Error:', error)
		}
	},
}
