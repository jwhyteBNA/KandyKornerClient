import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productsByType } from "../ApiManager";
import "./products.css"

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [expensive, setExpensive] = useState(false);
  const [filteredProducts, setFiltered] = useState([]);
  const navigate = useNavigate()

const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

useEffect(
    () => {
      productsByType()
        .then((productArray) => {
          setProducts(productArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  useEffect(() => {
    if (expensive) {
      const costlyCandy = products.filter((product) => product.price >= 2.00);
      setFiltered(costlyCandy)
    } else {
      setFiltered(products)
    }
  }, [expensive]);

  useEffect(
    () => {
        if (kandyUserObject.staff){
            setFiltered(products)
        }
    },
    [products]
)

 return <>
 {
    kandyUserObject.staff
    ? <>
    <button onClick={() => navigate("/product/create")}>Create New Product</button>
    <button onClick={() => {setExpensive(true)}}>Luxury Candy</button>
    <button onClick={() => {setExpensive(false)}}>All Candy</button>
    </>
    : <>
    </>
 }


      <h2>List of Products</h2>

      <ul>
        <article className="products">
          {filteredProducts.map((product) => {
            return (
              <section className="product" key={`product--${product.id}`}>
                <header>{product.name}</header>
                <span>{product.productType.name}</span>
                <footer>Price: ${product.price.toFixed(2)} per unit</footer>
              </section>
            );
          })}
        </article>
      </ul>
    </>
 
};
