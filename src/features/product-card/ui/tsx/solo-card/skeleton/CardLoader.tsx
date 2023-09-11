import ContentLoader from 'react-content-loader'

const PhLoader = (props: any) => (
	<ContentLoader
		speed={0.6}
		width={536}
		height={486}
		backgroundColor='#f3f3f3'
		foregroundColor='#dbdbdb'
		{...props}
	>
		<rect width='536' height='486' rx='11' ry='11' />
	</ContentLoader>
)

export default PhLoader
