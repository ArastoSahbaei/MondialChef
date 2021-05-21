import './SearchRecipe.css'
import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import APIService from '../../shared/api/service/APIService'
import RoutingPath from '../../routes/RoutingPath'

export const SearchRecipe = () => {
	const formRef: any = useRef()
	const history = useHistory()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [results, setResults] = useState<[]>([])
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const directToRecipeView = (recipe: any) => {
		setSearchTerm('')
		setResults([])
		formRef.current.value = ''
		history.push(RoutingPath.recipeDetailsView(recipe._id), recipe)
	}

	const startSearch = async () => {
		setIsSearching(true)
		if (debouncedSearchTerm) {
			try {
				const { data } = await APIService.searchRecipe(searchTerm)
				setIsSearching(false)
				setResults(data)
			} catch (error) {
				setIsSearching(false)
				setResults([])
				console.log(error)
			}
		} else {
			setResults([])
			setIsSearching(false)
		}
	}

	useEffect(() => {
		startSearch()
	}, [debouncedSearchTerm])

	const totalRecipes = '385784'
	const totalChefs = '4849'

	return (
		<div className="searchRecipeContainer">
			<input className="searchInput"
				ref={formRef}
				placeholder={`Search between ${totalRecipes} recipes written by ${totalChefs} chefs worldwide`}
				onChange={event => setSearchTerm(event.target.value)} />
			{isSearching && <div>Searching ...</div>}
			<div className="dropdown-content">
				{results.map((x: any) => (
					<div className="dropdown-value" key={Math.random()} onClick={() => directToRecipeView(x)}>
						<img src={'https://picsum.photos/400/200'} alt={'Error'} />
						<p>title: {x.title}</p>
						<p>created by: {x.createdByUser}</p>
						<p>96% like this recipe</p>
						<button>ADD TO FAVOURITE</button>
						<hr />
					</div>
				))}
			</div>
		</div>
	)
}
