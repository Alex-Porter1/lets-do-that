// import React, { useState, useEffect } from "react"
// import Button from 'react-bootstrap/Button'
// import { Link } from "react-router-dom"


// function ActivityList() {
//     const [categories, setCategories] = useState([])

//     console.log("key:", process.env.REACT_APP_YELP_API_KEY)

//     const apiKey = process.env.REACT_APP_YELP_API_KEY
//     const yelpURL = process.env.REACT_APP_YELP_URL

//     console.log("yelpURL", yelpURL)

//     const category = "bars"
//     const location = "sanfrancisco"

//     const getActivityList = async () => {        
//         // const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
//         const corsAnywhere = "https://thingproxy.freeboard.io/fetch/"
//         const url = `${yelpURL}search?location=${location}&categories=${category}`
//         // const url = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}`
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${apiKey}`
//         }}

//         const response = await fetch(`${corsAnywhere}${url}`, config)
//         const data = await response.json()
//         console.log("response", data)
//         setCategories(data.businesses)
//     }

//     useEffect(() => {
//         getActivityList()
//     }, [])

    
//     return (
//         <>
//         <h1>List of Activities</h1>
//         <table className="table table-striped">
//             <thead>
//             <tr>
//                 <th>Choice</th>
//                 <th>Business Name</th>
//                 <th>Rating</th>
//                 <th>Price Range</th>
//                 <th>Address</th>
//                 <th>Image</th>
//             </tr>
//             </thead>
//             <tbody>
//             {categories.map(category => {
//                 return (
//                 <tr key={category.id}>
//                     <td><Button variant="primary">Choose Me</Button></td>
//                     <td><a href={category.url}>{ category.name }</a></td>
//                     <td>{category.rating}</td>
//                     <td>{category.price}</td>
//                     <td>{ category.location.display_address[0] }</td>
//                     <td><img src={category.image_url} width='50' height='auto' /></td>
//                 </tr>
//                 );
//             })}
//             </tbody>
//         </table>
//       </>
//     )
// }

// export default ActivityList

//MOVIE LIST
import React, { useState, useEffect } from "react"
import ActivityCardBody from "./ActivityCardBody"


function ActivityList() {
    // const [activityColumns, setActivityColumns] = useState([[],[],[],[],[],[]]) 
    const [activityColumns, setActivityColumns] = useState([[],[],[]]) 
    const [activities, setActivities] = useState([])
    const apiKey = process.env.REACT_APP_YELP_API_KEY
    const yelpURL = process.env.REACT_APP_YELP_URL

    const category = "tacos"
    const location = "houston"

    useEffect(() => {
        (async () => {
            const corsAnywhere = "https://thingproxy.freeboard.io/fetch/"
            const url = `${yelpURL}search?location=${location}&categories=${category}`
            // const url = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}`
            const config = {
                headers: {
                    Authorization: `Bearer ${apiKey}`
            }}
    
            const activitiesResponse = await fetch(`${corsAnywhere}${url}`, config)
            if (activitiesResponse.ok) {
                const activitiesData = await activitiesResponse.json()
                console.log("count:", activitiesData.businesses.length)
                setActivities(activitiesData.businesses)
            }
        })()
    }, [])
    

    useEffect(() => {
        // const columns = [[],[],[],[],[],[]] 
        const columns = [[],[],[]] 
        let i = 0
        for (const activity of activities) {
            columns[i].push(activity)
            i = i + 1
            if (i > 2) {
                i = 0
            }
        }
        setActivityColumns(columns)
    }, [activities])

    return (
        <div className="container">
            <h2>Make a selection!</h2>
            <div className="row mt-5">
                {activityColumns.map((column, col_idx) => {
                    return (
                        ActivityCardBody(column, col_idx)
                    );
                })}
            </div>
        </div>
    )
}

export default ActivityList;