import { useForm } from "react-hook-form"

const OrdersForm = ({ onOrder }) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = ({ orderNotes }) => { onOrder(orderNotes) }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="order-notes">Order notes:</label>
                <input type="text" { ...register('orderNotes') } placeholder='No sugar, extra milk etc.' />
            </fieldset>
            <button type="submit">Order</button>
           
        </form>
    )
}
export default OrdersForm