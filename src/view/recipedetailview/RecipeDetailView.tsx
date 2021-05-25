import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import APIService from '../../shared/api/service/APIService'
import { UserContext } from '../../shared/providers/UserProvider'

export const RecipeDetailView = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const location: any = useLocation()

	const addToFavourite = async () => {
		//TODO: location.state.id will be undefined if the URL is not navigated to.
		try {
			await APIService.updateFavouriteRecipes({ userId: authenticatedUser.id, favouriteRecipes: location.state.id })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<img src={'https://picsum.photos/400/200'} alt={'Error'} />
			<h1>{location.state.title}</h1>
			<h1>{location.state._id}</h1>
			<h1>{location.state.createdAt}</h1>
			<h1>{location.state.createdByUser}</h1>
			<h1>{location.state.description}</h1>
			<h1>{location.state.duration}</h1>
			<h1>{location.state.originCountry}</h1>
			<button onClick={() => addToFavourite()}>ADD TO FAVOURITE</button>
		</div>
	)
}