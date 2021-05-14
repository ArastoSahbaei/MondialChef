import './ProfileDropDown.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'

export const ProfileDropDown = () => {
	const [, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory()

	const logout = () => {
		localStorage.removeItem('token')
		setAuthenticatedUser(false)
		history.push(RoutingPath.homeView)
	}

	return (
		<div className="profileDropdown">
			<span>Firstname Lastname</span> <br />
			<span>qwerty@gmail.com</span>
			<hr />
			<div className='dropDownProfileRowWrapper'>
				<span onClick={() => history.push(RoutingPath.createRecipeView)}>Profile</span> <br />
				<span onClick={() => history.push(RoutingPath.createRecipeView)}>my Recipes</span> <br />
				<span onClick={() => history.push(RoutingPath.createRecipeView)}>Create new Recipe</span>
				<hr />
				<span onClick={() => logout()}>Sign out</span>
			</div>
		</div>
	)
}
