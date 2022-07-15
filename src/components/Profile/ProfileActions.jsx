import { storageDelete, storageSave } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { orderClearHistory } from "../../api/order"

const ProfileActions = () => {
    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {  // prompt for logout
            storageDelete(STORAGE_KEY_USER)     // delete current user
            setUser(null)                       // update state
        }
    }
    
    // clear translation history
    const handleClearHistoryClick = async () => {
        if (!window.confirm("Are you sure?\nThis cannot be undone!")) 
            return

        const [ clearError ] = await orderClearHistory(user.id)
        
        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []    // update user with empty translation-list
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)    // update state
    }

    return (
        <ul className="btns">
            <li>
                <button className="clearbtn" onClick={ handleClearHistoryClick }>Clear history</button>
            </li>
            <li>
                <button className="clearbtn" onClick={ handleLogoutClick }>Logout</button>
            </li>
        </ul>
    )
}

export default ProfileActions