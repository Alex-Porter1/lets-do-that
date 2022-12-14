import React, { useState, useEffect } from "react"
import ActivityCardBody from "./ActivityCardBody"
import stateList from "./states"
import { useAuthContext } from "./useToken"
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useLocation } from 'react-router-dom'
import "./index.css"
import Nav from "./Nav"


function ActivityList() {
    const [activityColumns, setActivityColumns] = useState([[],[],[]])
    const [activities, setActivities] = useState([])
    const [location, setLocation] = useState("")
    const loc = useLocation()
    let category = {category: "bars"}
    if (loc.state) {
        category = loc.state
        console.log("category:", category)
    }
    const apiKey = process.env.REACT_APP_YELP_API_KEY
    const yelpURL = process.env.REACT_APP_YELP_URL

    const navigate = useNavigate();
    const { token } = useAuthContext();

    useEffect(() => {
        if (!token) {
            console.log('user not logged in, redirect to login page')
            navigate(`/login`)
        }
    }, [navigate, token])

    const handleSubmit = (event) => {
        event.preventDefault()
        let theCity = event.target.location.value.replaceAll(" ", "").toLowerCase()
        let theState = event.target.state.value.toLowerCase()
        let combined = theCity + "," + theState
        setLocation(combined)
    }

    useEffect(() => {
        (async () => {
            if (location) {
                const data = {
                    "location": location,
                    "category": category.category,
                }
                console.log("data:", data)
                const url = `${process.env.REACT_APP_ACTIVITIES}/api/yelp/get/`
                const config = {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
            }
                const activitiesResponse = await fetch(url, config)
                // const activitiesResponse = await fetch(`${url}`, config)
                if (activitiesResponse.ok) {
                    const activitiesData = await activitiesResponse.json()
                    setActivities(activitiesData.businesses)
                }
            }
        })()
    }, [location, category.category, yelpURL, apiKey])  // made change


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
        <div class="container-fluid second-bgimage">
        <div> <Nav /> </div>
        <div className="container">
            <div className="text-center">
                <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
            </div>
            <div className="mt-3">
                <h2 className="black-text-white-outline">Current Category:</h2> <h2><Badge bg="success">{category.category.toUpperCase()}</Badge></h2>
            </div>
            <div className="mt-3">
                <h2 className="black-text-white-outline">Choose a location!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input placeholder="Type in a city or location" required type="text" name="location" id="location" className="form-control"/>
                    <label htmlFor="location">Type in a city</label>
                </div>
                <div className="form-floating mb-3">
                    <select required name="state" id="state" className="form-select">
                    <option value="">Choose a state from the dropdown</option>
                    {stateList.map(state => {
                        return (
                            <option key={state.abbreviation} value={state.abbreviation}>
                                {state.name}
                            </option>
                        )
                    })}
                    </select>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>
            <div className="mt-3">
                {location
                ?
                <>
                <h2 className="black-text-white-outline">{activities.length} Results. Make a selection or try a different location!</h2>
                <div className="row mt-5">
                    {activityColumns.map((column, col_idx) => {
                        return (
                            ActivityCardBody(column, col_idx)
                        );
                    })}
                </div>
                </>
                : <h2 className="black-text-white-outline">Choose a city and state, then press Submit!</h2>}
            </div>
        </div>
        </div>
    )
}

export default ActivityList;