import { StaffViews } from "./StaffAppView"
import { CustomerViews } from "./CustomerAppView"

export const ApplicationViews = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

	if (kandyUserObject.staff) {
        return <StaffViews/>
    } 
    else {
        return <CustomerViews/>
    }

}

