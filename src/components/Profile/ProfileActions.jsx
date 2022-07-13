import { Link } from "react-router-dom"

const ProfileActions = ({ logout }) => {

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')) {
           logout()
        }
    }

    return (
        <ul>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
                <button>Clear history</button>
            </li>
            <li>
                <button onClick={ handleLogoutClick }>Logout</button>
            </li>
        </ul>
    )
}

export default ProfileActions