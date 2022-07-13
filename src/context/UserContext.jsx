import { useContext } from "react";
import { createContext } from "react";
import { useState } from 'react'
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys"

//context -> exposing
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}


//provider -> managing state
const UserProvider = ({ children }) => {
     //magic strings/numbers
    const [ user, setUser ] = useState( storageRead( STORAGE_KEY_USER ) )

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