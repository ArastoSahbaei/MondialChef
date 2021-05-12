import React, { useState, createContext } from 'react'
import { authenticatedUser } from '../interface/Interface'

const defaultValues = {
	id: undefined,
	username: undefined,
	token: undefined,
	authenticated: false,
	newsLetterSubscription: {
		recieveNewsLetters: false,
	},
}

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<authenticatedUser>(defaultValues)
	const { children } = props

	return (
		<UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
			{children}
		</UserContext.Provider>
	)
}