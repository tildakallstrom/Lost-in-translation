import { createHeaders } from './index'
import { API_URL } from '../const/apiURL'

// add translation to history
export const addTranslation = async (user, translated) => {
    try {
       const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translated]
            })
       })

       if(!response.ok) {
        //throw error if response is not ok
            throw new Error('Could not update translation')
       }

       const result = await response.json()

       return [ null, result ]
    } 
    catch (error) {
       return [ error.message, null ]
    }
}

// clear translationshistory from user with given ID
export const orderClearHistory = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []      
            })
        })

        if (!response.ok) {
            throw new Error('Could not update orders')
        }

        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [error.message, null]
    }

}