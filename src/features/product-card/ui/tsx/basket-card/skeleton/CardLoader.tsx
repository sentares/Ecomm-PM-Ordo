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
			<rect x='10%' y='0' rx='14' ry='14' width='58%' height='252' />
			<rect x='0' y='0' rx='14' ry='14' width='238' height='252' />
			<rect x='10%' y='274' rx='14' ry='14' width='58%' height='252' />
			<rect x='0' y='274' rx='14' ry='14' width='238' height='252' />
			<rect x='69.8%' y='0' rx='14' ry='14' width='30%' height='528' />
			{/* <rect x='8' y='542' rx='14' ry='14' width='238' height='252' /> */}
		</ContentLoader>
	)
}

export default BasketProductsLoader
