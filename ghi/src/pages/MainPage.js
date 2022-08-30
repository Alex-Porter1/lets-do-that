import { useEffect, useState } from "react";
import image from './img/Sand.jpg';

function MainPage() {
   

    return (
        <div style={{ backgroundImage: `url(${image})` }}>
        Let's go..
        
         
            <p className="lead mb-4">
              What do you want to do today?
            </p> 
            </div>
    
  );
    }
export default MainPage;

 // let [ activities, setActivities] = useState([])
    // const apiKey = process.env.REACT_APP_YELP_API_KEY
    // const yelpURL = process.env.REACT_APP_YELP_URL
    // const yelpID = "ryvBsB9FrBBZDak87iGS1w"


    // useEffect(() => {
    //     async function getActivities() {
            // const url = `${yelpURL}${yelpID}`
            // const response = await fetch(url);
            // if (response.ok) {
            //     const data = await response.json();
            //     setActivities(data);
        //     }

        // }
        // getActivities();
    // }, [])