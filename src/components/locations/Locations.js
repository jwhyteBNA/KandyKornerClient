import { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"
import "./locations.css"

export const LocationList = () => {
    const [ locations, setLocations ] = useState([])

    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            getAllLocations()
            .then((locationArray) => {
                setLocations(locationArray)
            })
        }, 
        []
    )

    return <>
    <h2>Kandy Korner Locations</h2>
    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.id}`}>
                        <header>Address: {location.address}</header>
                        <footer>Feet of Candy: {location.squareFootage}</footer>
                    </section>
                })
        }
    </article>   
    </>
}