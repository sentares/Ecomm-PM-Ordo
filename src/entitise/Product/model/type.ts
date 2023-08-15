export interface IProduct {
	amount: number
	availability: string
	brand: string
	category: string
	description: string
	id: number
	images: Image[]
	issued_at: string
	issuing_country: string
	name: string
	power: number
	price: number
	reviews: Review[]
	size: string
	state: string
	store: number
	type: string
	liked?: boolean
}

export interface Image {
	image: string
}

export interface Review {
	author: string
	text: string
	rating: number
}
