import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Locations"
import { ProductList } from "../products/Products"
import { ProductForm } from "../products/ProductForm"
import { HiringForm } from "../employees/HiringForm"
import { EmployeeList } from "../employees/EmployeeList"
import { CustomerList } from "../customers/Customers"
import { CustomerDetails } from "../customers/CustomerDetail"

export const StaffViews = () => {
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
				<Route path="product/create" element={ <ProductForm /> } />
				<Route path="products" element={ <ProductList /> } />
                <Route path="staff/create" element={ <HiringForm /> } />
                <Route path="staff" element={ <EmployeeList  /> }/>
                <Route path="customers" element={ <CustomerList  /> }/>
                <Route path="customers/:customerId" element={ <CustomerDetails /> }/>
            </Route>
        </Routes>
    )
}

