import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import React, { useEffect } from 'react';
import { userById } from "../api/user"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageSave } from "../utils/storage"

const Profile = () => {
    const { user, setUser } = useUser()

    // load user
    useEffect(() => {
        (async function() {
            const [ error, latestUser ] = await userById(user.id)

            if (error == null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        })()
    }, [ setUser, user.id ])
    
    return (
        <>
            <div className="yellow3">
                <ProfileHeader username={ user.username } />
                <ProfileActions />
            </div>
            <div className="translatebox">
                <TranslationHistory translations={ user.translations } />
            </div>
        </>
    )
}
export default withAuth(Profile)