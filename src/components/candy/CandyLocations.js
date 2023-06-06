import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllProductLocations } from "../ApiManager"

export const CandyDetails = () => {
const {productId} = useParams()
const [product, updateProduct]= useState({})

useEffect(
    () => {
        getAllProductLocations(id)
        .then((data) => {
            const singleProduct = data[0]
            updateProduct(singleProduct)
        })
    },
    [productId]
)
    return  <section className="product">
    <header className="product_header">You can find {product?.name} at </header>
    <div>Email: {product?.user?.email}</div>
    <div>Loyalty Number: {product.loyaltyNumber}</div>
    </section>
}