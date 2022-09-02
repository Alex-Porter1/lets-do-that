import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function ActivityCardBody(column, col_idx) {
    return (
      <div key={col_idx} className="col">
        {column.map(activity => {
            const name = activity.name.toLowerCase().split(/[-:\s,]+/).join("-")
            console.log("id", activity.id)
            return (
                <div key={activity.id} className="card mb-3 shadow">
                <img src={activity.image_url} className="card-img-top" />
                <div className="card-body">
                    <Link style={{textDecoration: "none"}} to={`/activities/${name}/${activity.id}`}>
                        <h5 className="card-title text-dark">{activity.name}</h5>
                    </Link>
                    {/* <h5 className="card-title">{activity.name}</h5> */}
                    <h6 className="card-subtitle mb-2 text-muted">
                        Rating: {activity.rating} • Price: {activity.price ? activity.price : "N/A"}
                    </h6>
                    <span className="card-text">                  
                        {activity.location.display_address.join(", ")}
                    </span>
                    <div className="card-footer text-center">
                        <Link to={`/activities/${name}/${activity.id}`}>
                            <button className="btn btn-outline-dark">Select</button>
                        </Link>
                    </div>
                </div>
                </div>
            );
        })}
      </div>
    );
  }

export default ActivityCardBody;