export const USER_STORAGE_KEY = 'userToken'

export const localUserStorage = () => {
	const storedData = localStorage.getItem(USER_STORAGE_KEY)
	// ? JSON.parse(storedData) : null

	return storedData
}
