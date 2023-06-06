import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Locations"
import { ProductContainer } from "../candy/CandyContainer"
import { OrderList } from "../purchases/Orders"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>THE Kingdom to Satiate your Sweet Tooth</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                <Route path="findCandy" element={ <ProductContainer /> } />
                <Route path="orders" element={ <OrderList /> } />
            </Route>
        </Routes>
        
    )
}

