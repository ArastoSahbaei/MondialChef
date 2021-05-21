import { useLocation } from 'react-router-dom'

export const RecipeDetailView = () => {
	const location: any = useLocation()

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
			<h1>ADD TO FAVOURITE</h1>
		</div>
	)
}