import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"


const Profile = () => {

    const { user, setUser } = useUser()

    const logout = () => {
         storageSave(STORAGE_KEY_USER, null)
         setUser(null)
    }

    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={ user.username } />
        <ProfileActions logout={ logout } />
        <ProfileOrderHistory orders={ user.orders } />
        </>
    )
}
export default withAuth(Profile)