import { FavoriteDataType } from 'entitise/Favorites/model/types/type'
import { UserDataType } from 'entitise/User/model/types/type'
import { ProductDataType } from 'features/product-card/model/types/dataType'

export interface StateSchema {
	productData: ProductDataType
	userData: UserDataType
	favoriteData: FavoriteDataType
}
