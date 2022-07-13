import { useContext } from "react";
import { createContext } from "react";
import { useState } from 'react'

//context -> exposing
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}


//provider -> managing state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
          { children }

        </UserContext.Provider>
    )
}

export default UserProvider