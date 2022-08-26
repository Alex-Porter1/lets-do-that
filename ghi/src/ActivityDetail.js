import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

const apiKey = process.env.REACT_APP_YELP_API_KEY
const yelpURL = process.env.REACT_APP_YELP_URL
const yelpID = "WavvLdfdP6g8aZTtbBQHTw"

function ActivityDetail() {
    const [activity, setActivity] = useState({})
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([])
    const [days, setDays] = useState([])
    const address = useRef()

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
            console.log("activity data:", activityData.hours[0].open)
            setDays(activityData.hours[0].open)
            address.current = activityData.location.display_address.join(", ")
        }
    }

    useEffect(() => {
        getActivityData()
    }, [])


    const findDays = (days) => {
        const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        // console.log("days:", days)
        const results = []
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
                results.push([daysOfWeek[i], `${days[dayIndex].start}-${days[dayIndex].end}`])
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

    return (
        <div className="container" width="500">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            width="800px"
                            height="400px"
                            />
                            <Carousel.Caption>
                            <h3>{activity.name}</h3>
                            <p>Rating: {activity.rating} • Price: {activity.price ? activity.price : "N/A"}</p>
                            </Carousel.Caption>
                    </Carousel.Item> 
                    )
                })}
            </Carousel>
            <div className="row">                
                <div className="col-6">
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
                <div className="col-6">
                    <h2>Hours of Operation</h2>
                    <table className="table">
                        <tbody>
                            {findDays(days)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


    // for (let day of days) {
            //     if (day.day === i) {
            //         console.log(`${daysOfWeek[i]}: ${day.start}-${day.end}`)
            //         break;
            //     } else {
            //         console.log(`${daysOfWeek[i]}: CLOSE`)
            //     }           
            // } 

    // return (
    //     <>
    //     <div className="container text-center">              
    //         <img src={activity.image_url} height="400" width="auto" />
    //         <h1>{ activity.name }</h1>
    //         {/* <h5 className="card-text">
    //             {activity.location.display_address.join(", ")}
    //         </h5> */}
    //         <h6 className="card-subtitle mb-2 text-muted">
    //             Phone: {activity.display_phone} • Rating: {activity.rating} • Price: {activity.price ? activity.price : "N/A"}
    //         </h6>
    //         <div className="container bcontent">
    //             <dl className="dl-horizontal">
    //                 <dt className="col-sm-3">MON</dt>
    //                 <dd className="col-sm-9">8:00 - 5:00</dd>
    //                 <dt className="col-sm-3">TUE</dt>
    //                 <dd className="col-sm-9">8:00 - 5:00</dd>
    //                 <dt className="col-sm-3">WED</dt>
    //                 <dd className="col-sm-9">8:00 - 5:00</dd>
    //             </dl>
    //         </div>      
    //     </div>
    //     </>
    // )
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