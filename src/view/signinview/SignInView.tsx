import { useContext, useState } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import APIService from '../../shared/api/service/APIService'
import { login } from '../../shared/interface/Interface'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState('Arasto')
	const [registerUser, setRegisterUser] = useState<any>({ username: '', password: '', email: '', recieveNewsLetters: true })
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [loginCredentials, setLoginCredentials] = useState<login>({ username: '', password: '' })
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState<any>({ email: '' })

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			const { data } = await APIService.login(loginCredentials)
			localStorage.setItem('token', data.token)
			console.log(data)
			console.log(data)
			console.log(data)

			setAuthenticatedUser(data)

			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	}

	const register = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			await APIService.registerNewUser(registerUser)
			//TODO: If registration is successfull -> login the user and tell em to verify their email
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
			alert(error)
		}
	}

	const sendRecoveryEmail = async () => {
		try {
			await APIService.forgotPassword(forgotPasswordEmail)
			alert(`We've sent a recovery link to: ${forgotPasswordEmail.email}`)
		} catch (error) {
			console.log(error)
			alert('Error occured')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form>
				<input placeholder="username" onChange={(event) => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />
				<button onClick={(event) => signIn(event)}>Sign in</button>
				<button onClick={() => history.push(RoutingPath.registerView)}>Register</button>
			</form>

			<hr />

			<h1>Register</h1>
			<form>
				<input placeholder="username" onChange={(event) => setRegisterUser({ ...registerUser, username: event.target.value })} /> <br />
				<input placeholder="email" onChange={(event) => setRegisterUser({ ...registerUser, email: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setRegisterUser({ ...registerUser, password: event.target.value })} /> <br />
			Recieve newsletter?
				<input checked={registerUser.recieveNewsLetters}
					type="checkbox"
					onChange={() => setRegisterUser({ ...registerUser, recieveNewsLetters: !registerUser.recieveNewsLetters })} /> <br />
				<button onClick={(event) => register(event)}>Register</button>
			</form>

			<hr />

			<h1>Forgot your password?</h1>
			<input placeholder="Enter your email" onChange={(event) => setForgotPasswordEmail({ email: event.target.value })} />
			<button onClick={() => sendRecoveryEmail()}>Send recovery link</button>
		</div>
	)
}
