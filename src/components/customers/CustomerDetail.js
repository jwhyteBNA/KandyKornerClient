import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { updateCustomerDetail } from "../ApiManager"
import { CustomerForm } from "./CustomerForm"

export const CustomerDetails = () => {
const {customerId} = useParams()
const [customer, updateCustomer]= useState({})

useEffect(
    () => {
        updateCustomerDetail(customerId)
        .then((data) => {
            const singleCustomer = data[0]
            updateCustomer(singleCustomer)
        })
    },
    [customerId]
)
    return  <section className="customer">
    <header className="customer_header">{customer?.user?.fullName}</header>
    <div>Email: {customer?.user?.email}</div>
    <div>Loyalty Number: {customer.loyaltyNumber}</div>
    <div><CustomerForm/></div>
    </section>
   
}