import { Link } from "react-router-dom"
import { storageDelete, storageSave } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { orderClearHistory } from "../../api/order"
import { userById } from "../../api/user"

const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    
    const handleClearHistoryClick = async () => {
        if (!window.confirm("Are you sure?\nThis cannot be undone!")) 
            return

        const [ clearError ] = await orderClearHistory(user.id)
        
        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            orders: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <ul>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
                <button onClick={ handleClearHistoryClick }>Clear history</button>
            </li>
            <li>
                <button onClick={ handleLogoutClick }>Logout</button>
            </li>
        </ul>
    )
}

export default ProfileActions