import React, { useState, createContext } from 'react'
import { authenticatedUser } from '../interface/Interface'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<authenticatedUser>()
	const { children } = props

	return (
		<UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
			{children}
		</UserContext.Provider>
	)
}