import { StaffNavBar } from "./StaffNavBar"
import { CustomerNavBar } from "./CustomerNavBar"

export const NavBar = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

	if (kandyUserObject.staff) {
        return <StaffNavBar/>
    } 
    else {
        return <CustomerNavBar/>
    }
}
