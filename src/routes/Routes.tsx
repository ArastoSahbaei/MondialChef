import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/navigationview/HomeView'
import { RecipeView } from '../view/navigationview/RecipeView'
import RoutingPath from '../routes/RoutingPath'
import { SignInView } from '../view/signinview/SignInView'

export const Routes = (props: { children?: React.ReactChild }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.recipeView} component={RecipeView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}