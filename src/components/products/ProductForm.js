import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getAllProductTypes } from "../ApiManager";

export const ProductForm = () => {
  const [productTypes, setProductTypes] = useState([]);

  const [product, update] = useState({
    name: "",
    productTypeId: 0,
    price: "",
  });
  /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the product list
    */
  const navigate = useNavigate();

//   const localKandyUser = localStorage.getItem("kandy_user")
//   const kandyUserObject = JSON.parse(localKandyUser)

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const productToSendToAPI = {
      name: product.name,
      productTypeId: parseInt(product.productTypeId),
      price: parseFloat(product.price),
    };

    // TODO: Create the object to be saved to the API
    createProduct(productToSendToAPI)
      .then(() => {
        navigate("/products");
      });
  };

  useEffect(
    () => {
      getAllProductTypes()
        .then((productTypesArray) => {
          setProductTypes(productTypesArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  return (
    <form className="productForm">
      <h2 className="productForm__title">
        Candy Factory - Build Your New Product
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Descriptive Candy Name"
            value={product.name}
            onChange={(event) => {
              const copy = { ...product };
              copy.name = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="candyType">Candy Type:</label>
          <select
            value={product.productTypeId}
            onChange={(event) => {
              const copy = { ...product };
              copy.productTypeId = event.target.value;
              update(copy);
            }}
          >
            <option value="">Select A Product Type</option>
            {productTypes.map((productType) => (
              <option key={productType.id} value={productType.id}>
                {productType.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            value={product.price}
            onChange={(event) => {
              const copy = { ...product };
              copy.price = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Submit New Candy!
      </button>
    </form>
  );
};
