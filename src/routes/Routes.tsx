import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/navigationview/HomeView'
import {RecipeView} from '../view/navigationview/RecipeView'
import {CreateRecipe} from '../view/profileview/CreateRecipe'
import RoutingPath from '../routes/RoutingPath'

export const Routes = (props: {children?: React.ReactChild}) => {
    return (
        <BrowserRouter>
        {props.children}
            <Switch>
                <Route exact path={RoutingPath.createRecipeView} component={CreateRecipe} />
                <Route exact path={RoutingPath.recipeView} component={RecipeView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}