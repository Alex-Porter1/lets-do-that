import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import './ActivityDetail.css'

const apiKey = process.env.REACT_APP_YELP_API_KEY
const yelpURL = process.env.REACT_APP_YELP_URL
const yelpID = "ryvBsB9FrBBZDak87iGS1w"

function ActivityDetail() {
    const [activity, setActivity] = useState({})
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([])
    const [days, setDays] = useState([])
    const address = useRef()
    const categories = useRef()

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    const getActivityData = async () => {
        const corsAnywhere = "https://thingproxy.freeboard.io/fetch/"
        const url = `${yelpURL}${yelpID}`
        const config = {
            headers: {
                Authorization: `Bearer ${apiKey}`
        }}
        const activityResponse = await fetch(`${corsAnywhere}${url}`, config)
        if (activityResponse.ok) {
            const activityData = await activityResponse.json()
            setActivity(activityData)
            setImages(activityData.photos)
            if (activityData.hours == undefined) {
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

    useEffect(() => {
        getActivityData()
    }, [])


    const findDays = (days) => {
        const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        const results = []
        if (days[0] == "No Hours Listed") {
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
                    let startType = "AM"
    
                    let intStart = parseInt(start)
                    console.log("intStart", intStart)
                    console.log("startHour", startHour)
    
                    if (intStart >= 1200 && intStart <= 1299) {
                        startType = "PM"
                    } else if (intStart >= 1300) {
                        let updatedIntStart = intStart - 1200
                        let updatedstartHour = updatedIntStart.toString()
                        if (updatedIntStart < 1000) {
                            let leadZero = "0"
                            let updatedstartSmall = updatedIntStart.toString()
                            updatedstartHour = leadZero + updatedstartSmall
                        } 
    
                        console.log("updatedIntStart", updatedIntStart)
                        console.log("updatedstartHour", updatedstartHour)
                        startHour = updatedstartHour.substring(0,2)
                        console.log("new startHour", startHour)
                        startType = "PM"
                    }
    
                    let end = days[dayIndex].end
                    
                    let endHour = end.substring(0,2)
                    let endMinute = end.substring(2)
                    let endType = "AM"
    
                    let intEnd = parseInt(end)
                    console.log("intEnd", intEnd)
                    console.log("endHour", endHour)
    
                    if (intEnd >= 1200 && intEnd <= 1299) {
                        startType = "PM"
                    } else if (intEnd >= 1300) {
                        let updatedIntEnd = intEnd - 1200
                        let updatedendHour = updatedIntEnd.toString()
                        if (updatedIntEnd < 1000) {
                            let leadZero = "0"
                            let updatedendSmall = updatedIntEnd.toString()
                            updatedendHour = leadZero + updatedendSmall
                        } 
    
                        console.log("updatedIntEnd", updatedIntEnd)
                        console.log("updatedendHour", updatedendHour)
                        endHour = updatedendHour.substring(0,2)
                        console.log("new startHour", endHour)
                        endType = "PM"
                    }
    
                    results.push([daysOfWeek[i], `${startHour}:${startMinute} ${startType} - ${endHour}:${endMinute} ${endType}`])
                    // results.push([daysOfWeek[i], `${days[dayIndex].start}-${days[dayIndex].end}`])
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
        <div className="container bg-color-div">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            width="700px"
                            height="500px"
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
        </>
    )    
}













export default ActivityDetail


// function MovieDetail() {
//     const imdbID = useRef()
//     const { movieId } = useParams()

//     const [movie, setMovie] = useState({})
//     const [genres, setGenres] = useState([])
//     const [ratings, setRatings] = useState([])

//     const getMovieData = async () => {
//         const movieResponse = await fetch(`${omdbURL}/?i=${imdbID.current}&plot=full&apikey=${omdbapiKey}`)
//         if (movieResponse.ok) {
//             const moviesData = await movieResponse.json()
//             setMovie(moviesData)
//             setGenres(moviesData.Genre.split(","))
//             setRatings(moviesData.Ratings)
//         }
//     }

//     const getImdbID = async () => {
//         const imdbIdResponse = await fetch(`${tmdbURL}/movie/${movieId}?api_key=${tmdbapiKey}&language=en-US`)
//         if (imdbIdResponse.ok) {
//             const imdbIddata = await imdbIdResponse.json()
//             imdbID.current = imdbIddata.imdb_id
//             getMovieData()
//         }
//     }

//     useEffect(() => {
//         getImdbID()
//     }, [])

//     const checkIfRatings = (ratings) => {
//         if (ratings.length === 0) {
//             return (<div>Ratings: N/A</div>)
//         } else {
//             return(
//                 <>
//                 {ratings.map((rating, index) => {
//                     return (
//                         <div key={index}>
//                             {rating.Source}: {rating.Value}
//                         </div>
//                     )
//                 })}
//                 </>
//             )        
//         }
//     }

//     return (
//         <>
//         <div className="container">
//             <h1>{ movie.Title }</h1>
//             <ul className="list-inline">
//                 <li className="list-inline-item">{ movie.Year } • </li>
//                 <li className="list-inline-item">{ movie.Rated === "N/A" ? "NR" : movie.Rated } • </li>
//                 <li className="list-inline-item">{ movie.Runtime }</li>
//             </ul>
//             <div className="row">
//                 <div className="col-3">
//                     <img src={ movie.Poster } width='250' height='auto' />
//                     <div>
//                         {checkIfRatings(ratings)}
//                     </div>
//                 </div>
//                 <div className="col-9">
//                     <div>
//                         {genres.map((genre, index) => {
//                             return (
//                             <span key={index}>
//                                 <Button className="rounded-pill" variant="outline-dark" size="sm">{ genre }</Button>{' '}
//                             </span>
//                             )
//                         })}
//                     </div>    
                    // <table className="table">
                    //     <tbody>
                    //         <tr>
                    //             <td colSpan={2}>{ movie.Plot }</td>
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Release date</th>
                    //             <td>{ movie.Released }</td>
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Language</th>
                    //             <td>{ movie.Language }</td> 
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Country</th>
                    //             <td>{ movie.Country }</td> 
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Director(s)</th>
                    //             <td>{ movie.Director }</td> 
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Writer(s)</th>
                    //             <td>{ movie.Writer }</td> 
                    //         </tr>
                    //         <tr>
                    //             <th scope="row">Main Casts</th>
                    //             <td>{ movie.Actors }</td> 
                    //         </tr>
                    //     </tbody>
                    // </table>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }