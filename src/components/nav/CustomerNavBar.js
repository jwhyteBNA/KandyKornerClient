import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item"> 
                <Link className="navbar_locations" to="/Locations">Locations</Link>
            </li>
            <li className="navbar__item"> 
                <Link className="navbar_candy" to="/findCandy">Find Candy</Link>
            </li>
            <li className="navbar__item"> 
                <Link className="navbar_orders" to="/orders">My Orders</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Leave Kandy Korner</Link>
            </li>
        </ul>
    )
}

