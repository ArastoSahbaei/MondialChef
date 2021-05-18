import { Formik, Field, Form } from 'formik'
import './CreateRecipeView.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import APIService from '../../../shared/api/service/APIService'

export const CreateRecipeView = () => {
	const [authenticatedUser,] = useContext(UserContext)


	const createRecipe = async (data: any) => {
		try {
			await APIService.createRecipe(data)
		} catch (error) {
			console.log('err' + error)
		}
	}

	return (
		<div className='createRecipeWrapper'>
			<h1 className='pageTitle'>Create recipe</h1>
			<Formik
				initialValues={{
					userId: authenticatedUser.id,
					title: '',
					duration: 1,
					ingredients: '',
					description: '',
					originCountry: '',
					recipeLanguage: ''
				}}
				onSubmit={(data, { setSubmitting }) => {
					setSubmitting(true)
					createRecipe(data)
					setSubmitting(false)
				}}>
				{() => (
					<Form>
						<Field placeholder="Recipe Title" name="title" type="input" /><br />
						<Field placeholder="Recipe duration" name="duration" type="number" /><br />
						<Field placeholder="Recipe ingredients TB ARRAY" name="ingredients" type="input" /><br />
						<Field placeholder="Recipe description" name="description" type="textarea" /><br />
						<Field placeholder="Recipe origin country" name="originCountry" type="input" /><br />
						<Field placeholder="Recipe language" name="recipeLanguage" type="input" /><br />
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
			<button onClick={() => console.log(authenticatedUser.id)}>xx</button>
		</div>
	)
}
