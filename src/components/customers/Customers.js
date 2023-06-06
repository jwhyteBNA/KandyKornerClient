import { useEffect, useState } from "react"
import { CustomerPurchases, getAllCustomers, productPurchase } from "../ApiManager";
import { Customer } from "./Customer";
import "./customer.css";

export const CustomerList = () => {
    const [ customers, setCustomers] = useState([])

    useEffect(
        () => {
           CustomerPurchases()
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )

  const itemsPurchased = (purchases) => {
    let totalPurchases = 0
    for (let i=0; i < purchases.length; i++) {
        totalPurchases += purchases[i].quantity
    }
    return totalPurchases
  }

// Another option for filtering candy quantity
//   const candyCount = purchases.filter(item => item.quantity)
//                             .reduce((sum, item) => sum + item.quantity, 0);

    return <article className="customers">
    {
    customers.map(customer => ({...customer, totalPurchase: itemsPurchased(customer.purchases)}))
    .sort((a, b) => b.totalPurchase - a.totalPurchase)
    .map(customer => (<Customer key={`customer--${customer.id}`}
        id={customer.id} 
        fullName={customer.fullName} 
        email={customer.email}
        totalPurchase={itemsPurchased(customer?.purchases)}
        />))
}
    </article>

}

