import React, { useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from "react-router-dom";
import { useAuthContext } from "./useToken"
import Badge from 'react-bootstrap/Badge';
import './ActivityDetail.css'
import './index.css'

function ActivityDetail() {
    const [activity, setActivity] = useState({});
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([])
    const [days, setDays] = useState([])
    const address = useRef()
    const categories = useRef()
    const { yelpID } = useParams()

    const navigate = useNavigate();
    const { token } = useAuthContext();

    useEffect(() => {
        if (!token) {
            console.log('user not logged in, redirect to login page')
            navigate(`/login`)
        }
    }, [navigate, token])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    const getActivityData = async () => {

        const data = {
            "id": yelpID,
        }
        console.log("data:", data)
        const url = `${process.env.REACT_APP_ACTIVITIES}/api/yelp/get/id`
        const config = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const activityResponse = await fetch(url, config)
        if (activityResponse.ok) {
            const activityData = await activityResponse.json()
            setActivity(activityData)
            setImages(activityData.photos)
            if (activityData.hours === undefined) {
                setDays(["No Hours Listed"])
            } else {
                console.log("activity data:", activityData.hours[0].open)
                setDays(activityData.hours[0].open)
            }
            address.current = activityData.location.display_address.join(", ")
            categories.current = activityData.categories
            console.log("catcur", categories.current)
        }
    }

    /* eslint-disable */
    useEffect(() => {
        getActivityData()
    }, [] )
    /* eslint-enable */

    const findDays = (days) => {
        const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        const results = []
        if (days[0] === "No Hours Listed") {  // made change
            return (
                <tr>
                    <th scope="row">No Hours Listed</th>
                </tr>
            )
        } else {
            for (let i = 0; i < daysOfWeek.length; i++) {
                let dayExists = false
                let dayIndex = 0
                for (let day of days) {
                    if (day.day === i) {
                        dayExists = true
                        dayIndex = days.indexOf(day)
                    }
                }
                if (dayExists) {
                    let start = days[dayIndex].start
                    let startHour = start.substring(0,2)
                    let startMinute = start.substring(2)

                    let formatStart = startHour + ":" + startMinute
                    let startDateFormat = new Date(`August 19, 1975 ${formatStart}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})

                    let end = days[dayIndex].end

                    let endHour = end.substring(0,2)
                    let endMinute = end.substring(2)
                    let formatEnd = endHour + ":" + endMinute

                    let endDateFormat = new Date(`August 19, 1975 ${formatEnd}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})

                    results.push([daysOfWeek[i], `${startDateFormat} - ${endDateFormat}`])
                } else {
                    results.push([daysOfWeek[i], `CLOSED`])
                }

            }
            return (results.map(result => {
                return (
                    <tr>
                        <th scope="row">{result[0]}:</th>
                        <td>{result[1]}</td>
                    </tr>
                )
            })
            )
        }

    }

    return (
        <>
        <div class="container-fluid third-bgimage">
        <div className="container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block responsive"
                            src={image}
                            width="700px"
                            height="500px"
                            alt=""
                            />
                            <Carousel.Caption>
                            <h1><Badge bg="dark">{activity.name}</Badge></h1>
                            <p><Badge bg="primary">Rating: {activity.rating}</Badge> <Badge bg="success">Price: {activity.price ? activity.price : "N/A"}</Badge></p>
                            <p>{categories.current.map(category => {
                                return (<span><Badge bg="danger">{category.title}</Badge>{' '}</span>)
                            })}</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2>Contact & Location</h2>
                    <div>
                        <dl className="dl-horizontal">
                            <dt className="col-sm-3"><Badge bg="secondary">Address</Badge></dt>
                            <dd className="col-sm-9">{address.current}</dd>
                            <dt className="col-sm-3"><Badge bg="secondary">Phone</Badge></dt>
                            <dd className="col-sm-9">{activity.display_phone}</dd>
                        </dl>
                    </div>
                </div>
                <div className="col-8">
                    <h2>Hours of Operation</h2>
                    <table className="table">
                        <tbody>
                            {findDays(days)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ActivityDetail