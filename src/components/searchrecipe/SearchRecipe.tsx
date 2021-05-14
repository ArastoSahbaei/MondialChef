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

	const directToRecipeView = () => {
		setSearchTerm('')
		setResults([])
		formRef.current.value = ''
		history.push(RoutingPath.recipeView)
	}

	const startSearch = async () => {
		setIsSearching(true)
		if (debouncedSearchTerm) {
			try {
				const { data } = await APIService.getAllRecipes()
				setIsSearching(false)
				setResults(data)
			} catch (error) {
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

	return (
		<div className="searchRecipeContainer">
			<input ref={formRef} className="searchInput" placeholder="Search Recipe" onChange={e => setSearchTerm(e.target.value)} />
			<div className="searchRecipeContent">
				{isSearching && <div>Searching ...</div>}
				<div className="dropdown-content" onClick={() => directToRecipeView()}>
					{results.map((x: any) => (
						<div className="dropdown-value" key={Math.random()}>
							<img src={'https://picsum.photos/400/200'} alt={"Error"} />
							<p>{x.title}</p>
							<p>{x.createdByUser.username}</p>
							<hr />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
