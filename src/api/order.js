import { createHeaders } from './index'

const apiUrl = process.env.REACT_APP_API_URL

/*
    POST - create new record
    PATCH - update parts of the record
    GET - Read records
    DELETE - removes a record
    PUT - replaces entire record
*/

export const orderAdd = async (user, order) => {
    try {
       const response = await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            username: user.username,
            orders: [...user.orders, order]
        })
       })

       if(!response.ok) {
        throw new Error('Could not update the order')
       }

       const result = await response.json()
       return [ null, result ]
    } 
    catch (error) {
       return [ error.message, null ]
    }
}

export const orderClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                orders: []      
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