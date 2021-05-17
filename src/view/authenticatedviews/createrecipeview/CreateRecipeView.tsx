import { Formik, Field, Form } from 'formik'
import './CreateRecipeView.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import APIService from '../../../shared/api/service/APIService'

export const CreateRecipeView = () => {
	const [authenticatedUser,] = useContext(UserContext)


	const createRecipe = async (recipeTitle: string, recipeDuration: number, recipeIngredients: string, recipeDescription: string, recipeOriginCountry: string, recipeLanguage: string) => {
		try {
			await APIService.createRecipe(authenticatedUser.id, recipeTitle, recipeDuration, recipeIngredients, recipeDescription, recipeOriginCountry, recipeLanguage)
		} catch (error) {
			console.log('err' + error)
		}
	}

	return (
		<div className='createRecipeWrapper'>
			<h1 className='pageTitle'>Create recipe</h1>
			<Formik
				initialValues={{ recipeTitle: '', recipeDuration: 1, recipeIngredients: '', recipeDescription: '', recipeOriginCountry: '', recipeLanguage: '' }}
				onSubmit={(data, { setSubmitting }) => {
					setSubmitting(true)
					createRecipe(data.recipeTitle, data.recipeDuration, data.recipeIngredients, data.recipeDescription, data.recipeOriginCountry, data.recipeLanguage)
					setSubmitting(false)
				}}>
				{() => (
					<Form>
						<Field placeholder="Recipe Title" name="recipeTitle" type="input" /><br />
						<Field placeholder="Recipe duration" name="recipeDuration" type="number" /><br />
						<Field placeholder="Recipe ingredients TB ARRAY" name="recipeIngredients" type="input" /><br />
						<Field placeholder="Recipe description" name="recipeDescription" type="textarea" /><br />
						<Field placeholder="Recipe origin country" name="recipeOriginCountry" type="input" /><br />
						<Field placeholder="Recipe language" name="recipeLanguage" type="input" /><br />
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
