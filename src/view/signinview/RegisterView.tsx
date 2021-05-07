import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const RegisterView = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    
    const registerUser = (username: string, password: string) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        history.push(RoutingPath.signInView)
        alert(`Thank you for registering ${username}`)
    }

    return (
        <div>
            <h1>RegisterView</h1>
            <input placeholder="username" onChange={(event) => setUsername(event.target.value)} /> <br />
            <input placeholder="password" onChange={(event) => setPassword(event.target.value)} /> <br />
            <button onClick={() => registerUser(username,password)}>submit</button>
        </div>
    )
}
