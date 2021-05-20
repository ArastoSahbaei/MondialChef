import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import Logotype from '../../../shared/images/logotype.svg'
import { SearchRecipe } from '../../searchrecipe/SearchRecipe'
import heartImg from '../../../shared/images/heart.svg'

export const DesktopNavigation = () => {
	const history = useHistory()
	const [authenticatedUser] = useContext(UserContext)

	const displayUsernameOrSigninButton = () => {
		return authenticatedUser.authenticated
			? <div className='navigationProfile'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
	}

	const displayFavouriteProductsHeart = () => {
		return (
			<div className='navHeartWrapper' onClick={() => history.push(RoutingPath.favouriteRecipesView)}>
				<img className='navHeart' src={heartImg} alt={''} />
				{/* {displayAmountOfFavouriteProducts()} */}
			</div>
		)
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				onClick={() => history.push(RoutingPath.homeView)}
				src={Logotype}
				alt='' />
			<div className='searchRecipeBarWrapper'>
				<div className='searchRecipeBarSpan'>
					<span onClick={() => history.push(RoutingPath.recipeView)}>recipes</span>
					<span onClick={() => history.push(RoutingPath.recipeView)}>top 100</span>
					<span onClick={() => history.push(RoutingPath.recipeView)}>inspiration</span>
					<span onClick={() => history.push(RoutingPath.recipeView)}>TBA</span>
				</div>
				<SearchRecipe />
			</div>
			{displayFavouriteProductsHeart()}
			{displayUsernameOrSigninButton()}
		</div>
	)

}
