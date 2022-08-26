import React, { useState, useEffect } from "react"
import ActivityCardBody from "./ActivityCardBody"


function ActivityList() {
    const [activityColumns, setActivityColumns] = useState([[],[],[]]) 
    const [activities, setActivities] = useState([])
    const apiKey = process.env.REACT_APP_YELP_API_KEY
    const yelpURL = process.env.REACT_APP_YELP_URL

    const category = "bowling"
    const location = "sanantonio,tx"

    useEffect(() => {
        (async () => {
            const corsAnywhere = "https://thingproxy.freeboard.io/fetch/"
            const url = `${yelpURL}search?location=${location}&categories=${category}`
            const config = {
                headers: {
                    Authorization: `Bearer ${apiKey}`
            }}
    
            const activitiesResponse = await fetch(`${corsAnywhere}${url}`, config)
            if (activitiesResponse.ok) {
                const activitiesData = await activitiesResponse.json()
                // console.log("count:", activitiesData.businesses.length)
                setActivities(activitiesData.businesses)
            }
        })()
    }, [])
    

    useEffect(() => {
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