import { NavLink, useLocation } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    const { user } = useUser()
    const location = useLocation()

    // render navbar
    return (
        <nav>
            <ul>
                <li><img src="img/logo.png" alt="Logo" className="navlogo" /></li>
                <li>Lost in Translation</li>
            </ul>
            { user !== null &&
            <ul className="rightul">
                <li> 
                    {
                        !location.pathname.includes("/translate") ?         // if not on translate-page
                            <NavLink to="/translate">Translate</NavLink> :  // render navigate-link to translate
                            <span className="selected">Translate</span>     // or render as text (no link)
                    }
                </li>
                <li>
                    { 
                        !location.pathname.includes("/profile") ?           // if not on profile-page
                            <NavLink to="/profile">Profile</NavLink> :      // render profile as navigation link
                            <span className="selected">Profile</span>       // or text (no link)
                    }
                   
                </li>
            </ul>
            }
        </nav>
    )
}
export default Navbar