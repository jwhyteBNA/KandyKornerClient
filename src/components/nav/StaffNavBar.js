import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StaffNavBar = () => {
    const navigate = useNavigate()
 
    return (
        <ul className="navbar">
            <li className="navbar__item"> 
                <Link className="navbar_locations" to="/Locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_products" to="/Products">Products</Link>
             </li>
             <li className="navbar__item">
                <Link className="navbar_staff" to="/Staff">Staff</Link>
             </li>
             <li className="navbar__item">
                <Link className="navbar_customers" to="/Customers">Kustomers</Link>
             </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Staff Logout</Link>
            </li>
        </ul>
    )
}

