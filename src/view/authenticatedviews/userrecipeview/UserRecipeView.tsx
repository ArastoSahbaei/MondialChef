import APIService from '../../../shared/api/service/APIService';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {UserContext} from '../../../shared/providers/UserProvider';
import RoutingPath from '../../../routes/RoutingPath'
import {useHistory} from 'react-router-dom'

export const UserRecipeView = () => {
	const [userRecipes, setUserRecipes] = useState<any>([]);
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
	const history = useHistory()


	const getUserRecipes = async () => {
		try {
			const response = await APIService.getUserWithID(authenticatedUser.id);
			setUserRecipes(response.data.createdRecipes);
		} catch (error) {
			console.log(error);
		}
	};

	const displayUserRecipes = () => {
		const recipes = userRecipes.map((x: any) => (
			<div key={x} onClick={() => history.push(RoutingPath.recipeDetailsView(x._id))}><br />
				<img src={'https://picsum.photos/200/100'} alt={'Error'} /><br />
				<h3>{x.title}</h3><br />
				<span>{x.description}</span><br />
				<span>{x.ingrediens}</span><br />
				<span>{x.duration}mins</span>
				<span style={{padding:"0 15px"}}>Origin country: {x.originCountry}</span><br />
			</div>
		))

		return (
			<div>
				<span>{recipes}</span>
			</div>
		)
	};

	useEffect(() => {
		getUserRecipes()
	}, [])

	return (
		<div>
			<h1>Your recipes</h1>
			{displayUserRecipes()}
		</div>
	);
};
