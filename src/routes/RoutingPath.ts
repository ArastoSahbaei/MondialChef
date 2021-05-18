const homeView = '/'
const recipeView = '/recipes'
const signInView = '/signin'
const registerView = '/register'
const createRecipeView = '/createrecipe'
const favouriteRecipesView = '/favourite'
const recipeDetailsView = (id?: string) => { return id ? `/recipe/${id}` : '/recipe/:id' }

export default {
	homeView,
	recipeView,
	signInView,
	createRecipeView,
	registerView,
	favouriteRecipesView,
	recipeDetailsView
}