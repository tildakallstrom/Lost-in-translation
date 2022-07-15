import { useForm } from "react-hook-form"

// form for performing translations (logic on translate-page)
const TranslationsForm = ({ onTranslate }) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = ({ toTranslate }) => { onTranslate(toTranslate) }

    return (
        <div className="formdiv2">
            <form className="log_in" onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor="order-notes" hidden>Order notes:</label>
                <input className="input"  type="text" maxLength={40} { ...register('toTranslate') } placeholder='Text to translate' />
                <div className="buttondiv">
                    <button className="top" type="submit">»</button>
                </div>
            </form>
        </div>
    )
}
export default TranslationsForm