import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/HomeView'
import {RecipeView} from '../view/RecipeView'
import RoutingPath from '../routes/RoutingPath'

export const Routes = (props: {children?: React.ReactChild}) => {
    return (
        <BrowserRouter>
        {props.children}
            <Switch>
                <Route exact path={RoutingPath.recipeView} component={RecipeView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}