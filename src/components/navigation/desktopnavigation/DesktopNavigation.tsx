import RoutingPath from '../../../routes/RoutingPath';
import { useHistory } from 'react-router-dom';
import { Profile } from '../profilenavigation/ProfileNavigation'

export const DesktopNavigation = () => {
	const history = useHistory()

	return (
		<div>
			<span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
			<span onClick={() => history.push(RoutingPath.recipeView)}>Recipes</span>
			<Profile />
		</div>
	);
};
