import './ProfileDropDown.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import AuthenticatedPath from '../../../routes/AuthenticatedPath'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory()

	const logout = () => {
		localStorage.removeItem('token')
		setAuthenticatedUser(false)
		history.push(RoutingPath.homeView)
	}

	return (
		<div className="profileDropdown">
			<span>{authenticatedUser?.name?.firstName ?? 'Lorem'} {authenticatedUser?.name?.lastName ?? 'Ipsum'}</span> <br />
			<span>qwerty@gmail.com</span>
			<hr />
			<div className='dropDownProfileRowWrapper'>
				<span onClick={() => history.push(AuthenticatedPath.profileView)}>Profile</span> <br />
				<span onClick={() => history.push(AuthenticatedPath.userRecipeView)}>my Recipes ({authenticatedUser?.createdRecipes?.length + 1})</span> <br />
				<span onClick={() => history.push(AuthenticatedPath.createRecipeView)}>Create new Recipe</span>
				<hr />
				<span onClick={() => logout()}>Sign out</span>
			</div>
		</div>
	)
}
