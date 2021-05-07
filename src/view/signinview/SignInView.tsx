import { useContext, useState } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState('Arasto')
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			/* localStorage.setItem(LocalStorage.authenticationToken, data.token) */
			setAuthenticatedUser(username)
			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Login {authenticatedUser}</h1>
			<form>
				<input placeholder="username" onChange={(event) => setUsername(event.target.value)} /> <br />
				<button onClick={(event) => signIn(event)}>Sign in</button>
			</form>
		</div>
	)
}
