import DashboardLoader from '../skeleton/DashboardLoader'
import cls from './DasBoard.module.scss'
const Dashboard = () => {
	return (
		<div className={cls.dashboard}>
			<DashboardLoader />
		</div>
	)
}

export default Dashboard
