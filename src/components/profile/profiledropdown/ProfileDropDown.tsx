import './ProfileDropDown.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
	const history = useHistory()

	return (
		<div className="profileDropdown">
			<span>Arasto Sahbaei</span> <br />
			<span>arasto.sahbaei@gmail.com</span>
			<hr />
			<div className='dropDownProfileRowWrapper'>
				<span onClick={() => history.push(RoutingPath.createRecipeView)}>Create Recipe</span>
			</div>
		</div>
	)
}
