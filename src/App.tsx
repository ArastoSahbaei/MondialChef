import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './shared/providers/UserProvider'

export const App = () => {
	return (
		<UserProvider>
			<Routes>
				<Navigation />
			</Routes>
		</UserProvider>
	)
}