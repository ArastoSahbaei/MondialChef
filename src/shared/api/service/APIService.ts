import http from '../API'

const authenticatedRouteExample = () => {
	return http.get('/rofl')
}

const registerNewUser = (data: any) => {
	return http.post('/user/register', data)
}

const login = (credentials: any) => {
	return http.post('/user/login', credentials)
}

const getAllUsers = () => {
	return http.get('/user')
}

const getUserWithID = (ID: string) => {
	return http.get(`/user/${ID}`)
}

const getUserWithQuery = (usernameQuery: string) => {
	return http.get(`/searchuser?username=${usernameQuery}`)
}

const updateValuesOfExistingUser = () => {
	return http.get('/user/:userId')
}

const deleteUserWithID = () => {
	return http.delete('/user/:userId')
}

const forgotPassword = (email: any) => {
	return http.post('/forgotpassword', email)
}

const resetPassword = (newPasswordAndToken: any) => {
	return http.put('/resetpassword', newPasswordAndToken)
}

export default {
	authenticatedRouteExample,
	registerNewUser,
	login,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID,
	forgotPassword,
	resetPassword,
}