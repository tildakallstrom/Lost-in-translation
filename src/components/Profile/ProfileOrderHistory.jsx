import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ( { orders } ) => {
    const orderList = orders.map(
        (order, index) => <ProfileOrderHistoryItem key={ index + '-' + order } order={ order }/>)

    return (
        <section>
            <h2>Your order history</h2>
            <ul>
                { orderList }
            </ul>
        </section>
    )
}

export default ProfileOrderHistory