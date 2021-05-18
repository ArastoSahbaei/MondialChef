export interface authenticatedUser {
	username?: string
	password?: string
}

export interface login {
	username: string,
	password: string
}

export interface newRecipe {
	userId: string,
	recipeTitle: string,
	recipeDuration: number,
	recipeIngredients: string,
	recipeDescription: string,
	recipeOriginCountry: string,
	recipeLanguage: string
}