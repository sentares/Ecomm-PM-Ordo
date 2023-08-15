import ContentLoader from 'react-content-loader'

const CardLoader = (props: any) => (
	<ContentLoader
		speed={0.9}
		width={347}
		height={431}
		viewBox='0 0 347 431'
		backgroundColor='#f3f3f3'
		foregroundColor='#dbdbdb'
		{...props}
	>
		<rect width='347' height='431' rx='14' ry='14' />
	</ContentLoader>
)

export default CardLoader
