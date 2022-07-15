import withAuth from "../hoc/withAuth"
import TranslationsImage from "../components/Translations/TranslationsImage"
import React, { useState } from 'react';
import { useUser } from "../context/UserContext"
import { addTranslation } from "../api/order"
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { storageSave } from "../utils/storage"
import TranslationsForm from "../components/Translations/TranslationsForm";

// translation page
const Translations = () => {
    const [ translation, setTranslation ] = useState(null); // create initial state
    const { user, setUser } = useUser();

    const handleTranslation = async (toTranslate) => {
        const [error, updatedUser] = await addTranslation(user, toTranslate)

        if (error !== null) {
            console.log(error)
            return
        }

        setTranslation(toTranslate.split("").map((char, i) => {
            return <TranslationsImage 
                path={ `img/${char}.png` }  // pass image path
                character={char}
                key={ i + 1 }               // unique key using iterator index
            /> 
        }))
        
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <>
            <div className="yellow">
                <section id="order-notes">
                    <TranslationsForm onTranslate={ handleTranslation } />
                </section>
            </div>
            <div className="translatediv">
                { translation /* show translated message */ }
            </div>
        </>
    )
}
export default withAuth(Translations)