import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import Logotype from '../../../shared/images/logotype.svg'

export const DesktopNavigation = () => {
	const history = useHistory()
	const [authenticatedUser] = useContext(UserContext)

	const displayUsernameOrSigninButton = () => {
		return authenticatedUser
			? <div className='navigationProfile'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}> Sign in </span>
	}

	return (
		<div className='desktopNavigationWrapper'>

			<img className='navigationLogotype'
				onClick={() => history.push(RoutingPath.homeView)}
				src={Logotype}
				alt='' />

			<span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
			<span onClick={() => history.push(RoutingPath.recipeView)}>Recipes</span>
			{displayUsernameOrSigninButton()}
		</div>
	)

}
