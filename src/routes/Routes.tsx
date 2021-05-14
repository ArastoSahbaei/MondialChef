import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { HomeView } from '../view/navigationview/HomeView'
import { RecipeView } from '../view/navigationview/RecipeView'
import { SignInView } from '../view/signinview/SignInView'
import { CreateRecipe } from '../view/profileview/CreateRecipe'
import APIService from '../shared/api/service/APIService'
import { UserContext } from '../shared/providers/UserProvider'
import AuthenticatedPath from './AuthenticatedPath'
import { CreateRecipeView } from '../view/authenticatedviews/createrecipeview/CreateRecipeView'
import { FavouriteRecipeView } from '../view/authenticatedviews/favouriterecipesview/FavouriteRecipeView'
import { ProfileView } from '../view/authenticatedviews/profileview/ProfileView'
import { UserRecipeView } from '../view/authenticatedviews/userrecipeview/UserRecipeView'
import { RecipeDetailView } from '../view/recipedetailview/RecipeDetailView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const validateToken = (tokenExp: number) => {
		const currentTime = Math.floor(Date.now() / 1000)
		return (tokenExp >= currentTime)
	}

	const parseJWT = async () => {
		const token = localStorage.getItem('token')
		if (!token) { return }
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		const JWT = JSON.parse(window.atob(base64))

		if (validateToken(JWT.exp)) {
			// TODO: There has to be a better way to recieve the username? You cannot just do a getUserWithID like this?
			const response = await APIService.getUserWithID(JWT.id)
			setAuthenticatedUser({
				id: JWT.id,
				authenticated: true,
				username: response.data.username,
			})
		} else {
			setAuthenticatedUser({
				id: undefined,
				authenticated: false,
				username: undefined
			})
			localStorage.removeItem('token')
		}
	}

	useEffect(() => {
		parseJWT()
	}, [])

	const authenticatedRoutes = () => {
		return (
			<>
				<Route exact path={AuthenticatedPath.createRecipeView} component={CreateRecipeView} />
				<Route exact path={AuthenticatedPath.favouriteRecipeView} component={FavouriteRecipeView} />
				<Route exact path={AuthenticatedPath.profileView} component={ProfileView} />
				<Route exact path={AuthenticatedPath.userRecipeView} component={UserRecipeView} />
			</>
		)
	}

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				{authenticatedRoutes()}
				<Route exact path={RoutingPath.recipeView} component={RecipeView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.createRecipeView} component={CreateRecipe} />
				<Route exact path={RoutingPath.recipeDetailsView()} component={RecipeDetailView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}