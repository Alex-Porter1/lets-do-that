import React, { useState, useEffect } from "react"

function ActivityList() {
    const [categories, setCategories] = useState([])

    const category = "bars"
    const location = "houston"

    const getActivityList = async () => {
        const url = `https://api.yelp.com/v3/businesses/search?location=houston&category=bars`
        const config = {
            headers: {
                Authorization: 'Bearer euH_Bo4VfoMFXy2ui5iZFx_-7qwJZhXKUzdiQpCaaw5akizBX6G0J8CP4Lykv7yaVEW5BfA6RVMB5sz8D3uFZebNk3ccuNndwSVUbZDDz5bJRUskF2reguN7RwQEY3Yx',
                Origin: 'localhost:3000',
                withCredentials: true
        }}

        const response = await fetch(url, config)
        const data = await response.json()
        console.log("response", data)
        setCategories(data.businesses)
    }

    useEffect(() => {
        getActivityList()
    }, [])

    
    return (
        <h1>Test</h1>
    )
}

export default ActivityList