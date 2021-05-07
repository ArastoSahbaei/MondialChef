import { ProfileDropDown } from './profiledropdown/ProfileDropDown'
import './Profile.css'
import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'

export const Profile = (): JSX.Element => {
	const [authenticatedUser] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<span>{authenticatedUser}</span>
			<img className='profileImg'
				src={'https://thispersondoesnotexist.com/image'}
				alt={''} />
			<ProfileDropDown />
		</div>
	)
}
