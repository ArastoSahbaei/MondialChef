
import Axios from 'axios'
import { useState } from 'react'

export const HomeView = () => {
	const [state, setState] = useState<Blob | any>()
	const formData = new FormData()

	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}


	const uploadAvatarLol = async () => {
		try {
			await Axios.post('http://localhost:3001/user/updateAvatar', formData, config)
			alert('it worked Lol')
		} catch (error) {
			console.error(error)
		}
	}

	const onFormSubmit = (e: any) => {
		e.preventDefault()
		formData.append('files', state.file)
		uploadAvatarLol()
	}

	const onChange = (e: any) => {
		setState({ file: e.target.files[0] })
	}

	return (
		<div>
			<form onSubmit={(e) => onFormSubmit(e)}>
				<h1>File Upload</h1>
				<input type="file" name="lmao" onChange={(e) => onChange(e)} />
				<button type="submit">Upload</button>
			</form>
		</div>
	)
}
