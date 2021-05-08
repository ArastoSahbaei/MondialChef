import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {useContext, useEffect} from 'react'
import { HomeView } from '../view/navigationview/HomeView'
import { RecipeView } from '../view/navigationview/RecipeView'
import { SignInView } from '../view/signinview/SignInView'
import { RegisterView } from '../view/signinview/RegisterView'
import { CreateRecipe } from '../view/profileview/CreateRecipe'
import {UserContext} from '../shared/providers/UserProvider'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [, setAuthenticatedUser] = useContext(UserContext)

	const checkIfIfUserIsAuthenticated = () => {
		const getLocalStorage = localStorage.getItem('username');
		if (getLocalStorage) {
			setAuthenticatedUser(getLocalStorage);
		}
	};

	useEffect(() => {
		checkIfIfUserIsAuthenticated();
	});

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.recipeView} component={RecipeView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.createRecipeView} component={CreateRecipe} />
				<Route exact path={RoutingPath.registerView} component={RegisterView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}