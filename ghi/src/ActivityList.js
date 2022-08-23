import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ActivityList() {
    const [categories, setCategories] = useState([])

    const category = "bars"
    const location = "sanfrancisco"

    const getActivityList = async () => {        
        // const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
        const corsAnywhere = "https://thingproxy.freeboard.io/fetch/"
        const url = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}`
        const config = {
            headers: {
                Authorization: 'Bearer euH_Bo4VfoMFXy2ui5iZFx_-7qwJZhXKUzdiQpCaaw5akizBX6G0J8CP4Lykv7yaVEW5BfA6RVMB5sz8D3uFZebNk3ccuNndwSVUbZDDz5bJRUskF2reguN7RwQEY3Yx'
        }}

        const response = await fetch(`${corsAnywhere}${url}`, config)
        const data = await response.json()
        console.log("response", data)
        setCategories(data.businesses)
    }

    useEffect(() => {
        getActivityList()
    }, [])

    
    return (
        <>
        <h1>Test</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Business Name</th>
                <th>Address</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => {
                return (
                <tr key={category.id}>
                    <td><a href={category.url}>{ category.name }</a></td>
                    <td>{ category.location.address1 }</td>
                    <td><img src={category.image_url} width='50' height='auto' /></td>
                </tr>
                );
            })}
            </tbody>
        </table>
      </>
    )
}

export default ActivityList