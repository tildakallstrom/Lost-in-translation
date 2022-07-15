import { createHeaders } from './index'
import { API_URL } from '../const/apiURL'

// check if there is an user in API with given username
export const checkForUser = async (username) => {
	try {
		const response = await fetch(`${API_URL}?username=${username}`)

		if (!response.ok) {
			throw new Error('Could not complete request.')
		}
		
		const data = await (await response).json()
		return [null, data]
	}
	catch (error) {
		return [error.message, []]
	}
}

// create a new user if username doesnt exist in API
export const createUser = async (username) => {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: createHeaders(),
			body: JSON.stringify({
				username,
				translations: []
			})
		})
		if (!response.ok) {
			throw new Error('Could not create user with username ' + username)
		}
		const data = await (await response).json()
		return [null, data]
	}
	catch (error) {
		return [error.message, []]
	}
}

//login user
export const loginUser = async (username) => {
	const [checkError, user] = await checkForUser(username)

	if (checkError !== null) {
		return [checkError, null]
	}

	if (user.length > 0) {
		//user does not exist
		return [null, user.pop()]
	}

	return await createUser(username)
	// const [ createError, newUser ] = createUser(username)

}

//fetch user by userId
export const userById = async (userId) => {
	try {
		const response = await fetch(`${API_URL}/${userId}`)
		if (!response.ok) {
			throw new Error('Could not feetch user')
		}
		const user = await response.json()
		return [null, user]
	}
	catch (error) {
		return [error.message, null]
	}
}