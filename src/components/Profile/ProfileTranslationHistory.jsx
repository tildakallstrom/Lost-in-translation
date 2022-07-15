import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

// consists of some amount of ProfileTranslationHistoryItem (s)
const TranslationHistory = ( { translations } ) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={ translation }/>
    )
    
    return (
        <section>
            <h2>Your translation history</h2>
                { translationList.length === 0 && <p>You have no translation history.</p> }
            <div className="translatediv2">
                <ul className="translatelist">
                    { translationList }
                </ul>
            </div>
        </section>
    )
}

export default TranslationHistory