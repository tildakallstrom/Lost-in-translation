import withAuth from "../hoc/withAuth"
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeButton"
import OrdersForm from "../components/Orders/OrdersForm"
import React, { useState } from 'react';
import { useUser } from "../context/UserContext"
import { orderAdd } from "../api/order"
import { STORAGE_KEY_USER } from './../const/storageKeys';
import { storageSave } from "../utils/storage"

const COFFEES = [
    {
        id: 1,
        name: "Americano",
        image: "img/americano.png"
    },
    {
        id: 2,
        name: "Cappuccino",
        image: "img/cappuccino.png"
    },
    {
        id: 3,
        name: "Latte",
        image: "img/latte.png"
    },
    {
        id: 4,
        name: "Espresso",
        image: "img/espresso.png"
    }
]

const Orders = () => {

    const [ coffee, setCoffee ] = useState(null);
    const { user, setUser } = useUser();

    const handleCoffeeClicked = (coffeeId) => {
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))
       
    }

    const handleOrderClicked = async (notes) => {
        //check if we have a coffee
        
        if (!coffee) {
            alert('Please select a coffee first');
            return
        }

        //combine the coffee with the notes
        const order = (coffee.name + ' ' + notes).trim()

        const [error, updatedUser] = await orderAdd(user, order)

        if (error !== null) {
            return
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
        
        //send a http request
    }

    const availableCoffees = COFFEES.map(coffee => {
        return <OrdersCoffeeButton 
        key={ coffee.id } 
        coffee={ coffee }
        onSelect={ handleCoffeeClicked } />
    })
    return (
        <>
        <h1>Orders</h1>
        <section id="coffee-options">
            { availableCoffees }
        </section>
        <section id="order-notes">
                <OrdersForm onOrder={ handleOrderClicked } />
            </section>
            <p>Summary: </p>
            { coffee &&  <p>Selected coffee: { coffee.name }</p> }
        </>
    )
}
export default withAuth(Orders)