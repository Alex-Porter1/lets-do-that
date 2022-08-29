import { useEffect, useState } from "react";

function MainPage() {
    let [ activities, setActivities] = useState([])

    useEffect(() => {
        async function getActivities() {
            const url = //"activities URL HERE"
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setActivities(data);
            }

        }
        getActivities();
    }, [])

    return (
        <div className="px-4 py-5 my-5 text-center">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-5 fw-bold">Let's go..</h1>
            <p className="lead mb-4">
              What do you want to do today?
            </p> 
            </div>
      </div>
  );
}


export default MainPage;