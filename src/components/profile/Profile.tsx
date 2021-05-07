import { ProfileDropDown } from './profiledropdown/ProfileDropDown'
import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import './Profile.css'

export const Profile = (): JSX.Element => {
	const [authenticatedUser] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<img className='profileImg'
				src={'https://thispersondoesnotexist.com/image'}
				alt={''} />
			<span>{authenticatedUser}</span>
			<ProfileDropDown />
		</div>
	)
}
