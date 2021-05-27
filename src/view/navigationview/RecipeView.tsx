import APIService from '../../shared/api/service/APIService'
import { useState , useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const RecipeView = () => {
	const history = useHistory()
	const [allRecipes, setAllRecipes] = useState<any>('')

	const fetchAllRecipes = async () => {
		try {
			const response = await APIService.getAllRecipes()
			setAllRecipes(response)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	const displayUserRecipes = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const recipes = allRecipes?.data?.map((x: any) => (
			<div key={x._id} onClick={() => history.push(RoutingPath.recipeDetailsView(x._id), x)}>
				<br />
				<img src={'https://picsum.photos/200/100'} alt={'Error'} />
				<br />
				<h3>{x.title}</h3>
				<br />
				<span>{x.description}</span>
				<br />
				<span>{x.ingrediens}</span>
				<br />
				<span>{x.duration}mins</span>
				<span style={{ padding: '0 15px' }}>Origin country: {x.originCountry}</span>
				<br />
				<span>Created by: {x.createdByUser}</span>
			</div>
		))

		return (
			<div>
				<span>{recipes}</span>
			</div>
		)
	}

	useEffect(() => {
		fetchAllRecipes()
	}, [])

	return (
		<div>
			{displayUserRecipes()}
		</div>
	)
}
