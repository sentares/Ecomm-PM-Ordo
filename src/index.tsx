import { StoreProvider } from 'app/providers/store'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StoreProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StoreProvider>
)
