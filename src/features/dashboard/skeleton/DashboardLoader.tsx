import ContentLoader from 'react-content-loader'

const DashboardLoader = (props: any) => (
	<ContentLoader
		width={1082}
		height={616}
		viewBox='0 0 1082 616'
		backgroundColor='#f0f0f0'
		foregroundColor='#dedede'
		{...props}
	>
		<rect x='0' y='0' rx='16' ry='16' width='536' height='616' />
		<rect x='560' y='0' rx='16' ry='16' width='520' height='336' />
		<rect x='560' y='362' rx='16' ry='16' width='520' height='254' />
	</ContentLoader>
)

export default DashboardLoader
