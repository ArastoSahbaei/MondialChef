/* eslint-disable import/no-anonymous-default-export */
const homeView = '/'
const recipeView = '/recipes'
const signInView = '/signin'
const registerView = '/register'
const createRecipeView = '/createrecipe'
const recipeDetailsView = (id?: string) => { return id ? `/recipe/${id}` : '/recipe/:id' }

export default {
	homeView,
	recipeView,
	signInView,
	createRecipeView,
	registerView,
	recipeDetailsView
}