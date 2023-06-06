import { useState, useEffect } from "react"
import "./orders.css";
import { getAllProducts, productPurchase } from "../ApiManager";

export const OrderList = () => {
    const [purchases, setPurchases] = useState([])
    const [products, setProducts] = useState([])
    const [filteredPurchases, setFiltered] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
          getAllProducts()
            .then((productArray) => {
              setProducts(productArray);
            });
        },
        [] 
      );

      useEffect(
        () => {
          productPurchase()
            .then((purchaseArray) => {
              setPurchases(purchaseArray);
            });
        },
        [] 
      );

      useEffect(
        () => {
            if (kandyUserObject.id){
                const myPurchases = purchases.filter(
                    (purchase) => purchase.userId === kandyUserObject.id)
                    setFiltered(myPurchases)
            }
        },
        [purchases]
    )
    
// const createLineItem = (purchases, products) => {
//   purchases.map()
//   for (const purchase of purchases) {
//     for (const product of products) {  
// if (product.id === purchase.productId) {

// }
// }
//   }
// }

return <>
<h2>Your Purchases</h2>

<ul>
  <article className="purchases">
    {filteredPurchases.map((purchase) => {
      return (
        <section className="purchase" key={`purchase--${purchase.id}`}>
          <header>{purchase.product.name}</header>
          <div>{purchase.product.length}</div>
          <div>Quantity Purchased: {purchase.quantity}</div>
          <div>Price: ${purchase.product.price.toFixed(2)} per unit</div>
          </section>
      );
    })}
  </article>
</ul>
</>
}