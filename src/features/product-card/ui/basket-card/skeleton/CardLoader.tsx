import ContentLoader from 'react-content-loader'

const BasketProductsLoader = (props: any) => {
	return (
		<ContentLoader
			speed={0.6}
			width={'100%'}
			height={1000}
			// viewBox='0 0 400 160'
			backgroundColor='#d9d9d9'
			foregroundColor='#ededed'
			{...props}
		>
			<rect x='258' y='6' rx='14' ry='14' width='660' height='252' />
			<rect x='8' y='6' rx='14' ry='14' width='238' height='252' />
			<rect x='258' y='274' rx='14' ry='14' width='660' height='252' />
			<rect x='8' y='274' rx='14' ry='14' width='238' height='252' />
			{/* <rect x='258' y='542' rx='14' ry='14' width='660' height='252' />
			<rect x='8' y='542' rx='14' ry='14' width='238' height='252' /> */}
		</ContentLoader>
	)
}

export default BasketProductsLoader
