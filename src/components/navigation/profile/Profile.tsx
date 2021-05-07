import {useHistory} from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';

export const Profile = () => {
    const history = useHistory()
	return (
		<div>
			<span onClick={() => history.push(RoutingPath.createRecipeView)}>Create recipe</span>
		</div>
	);
};
