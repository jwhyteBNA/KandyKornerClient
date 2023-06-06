import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllProducts, getPurchases, locationsForProducts, productLocation } from "../ApiManager";
import "./candy.css";

export const CandyList = ({searchTermState}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFiltered] = useState([]);

const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

useEffect(() => {
    const searchCandy = products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(searchTermState.toLowerCase());
    });
    setFiltered(searchCandy);
  }, [searchTermState]);


useEffect(
    () => {
      getAllProducts().then(
        (productArray) => {
          setProducts(productArray);
        });
    },
    [] 
  );

  useEffect(
    () => {
        if (kandyUserObject){
            setFiltered(products)
        }
    },
    [products]
)

const handleShowMeWhere = (productId) => {
    productLocation(productId)
      .then(productLocationArray => {
        const locationIds = productLocationArray.map(productLocation => productLocation.locationId)
        locationsForProducts(locationIds)
          .then(locationArray => {
            const locationAddresses = locationArray.map(location => location.address).join("\n")
            alert(`The product is sold at the following stores:\n\n${locationAddresses}`)
          })
      })
  }

  const handlePurchase = (productId) => {
    
    const ordersToSendToAPI = {
      userId: kandyUserObject.id,
      productId: productId,
      quantity: 1
    }
  
getPurchases(ordersToSendToAPI)
.then(() => {
 window.alert("Your Korner just got sweeter - you've purchased a treat!")})

}

 return <>

      <h2>List of Products</h2>

      <ul>
        <article className="candies">
          {filteredProducts.map((product) => {
            return (
              <section className="candy" key={`product--${product.id}`}>
                <header>{product.name}</header>
                <div>Price: ${product.price.toFixed(2)} per unit</div>
                <footer className="candy_footer">
                <Link to={`alert_${product.id}`} onClick={() => handleShowMeWhere(product.id)}>Show Me the Path To Candy!</Link>
                <button onClick={() => handlePurchase(product.id)}  className="btn_purchase">Purchase Me!</button>
                </footer>
              </section>
            );
          })}
        </article>
      </ul>
    </>
 
};

