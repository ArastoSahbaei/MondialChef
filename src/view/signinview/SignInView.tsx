import { useContext, useState } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

/* 	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			setAuthenticatedUser(username)
			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	} */

	const signIn = (usernames: string, passwords: string) => {
		if(localStorage.getItem("username") === usernames && localStorage.getItem("password") === passwords){
			setAuthenticatedUser(username)
			history.push(RoutingPath.homeView)
		} else {
			alert('Wrong username or password')
		}
	}

	return (
		<div>
			<h1>Login {authenticatedUser}</h1>
			<form>
				<input placeholder="username" onChange={(event) => setUsername(event.target.value)} /> <br />
				<input placeholder="password" onChange={(event) => setPassword(event.target.value)} /> <br />
				<button onClick={() => signIn(username,password)}>Sign in</button>
				<button onClick={() => history.push(RoutingPath.registerView)}>Register</button>
			</form>
		</div>
	)
}
