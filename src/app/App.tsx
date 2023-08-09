import Navbar from 'widgets/NavBar/tsx/Navbar'
import './index.scss'
import { AppRouter } from './providers/router'

function App() {
	return (
		<div>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
