import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from './useToken.js'
import jwt_decode from "jwt-decode"
import Moment from 'moment';
import "./MainPage.css"

function UserProfile() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateJoined, setDateJoined] = useState("")
    const [data, setData] = useState({});
    const { token } = useAuthContext();

    function setStates() {
        setUserName(data.username)
        setEmail(data.email)
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setDateJoined(Moment(data.date_joined).format("MMM Do YY"))
    }

    /* eslint-disable */
    useEffect(() => {
      const url = `${process.env.REACT_APP_ACCOUNTS}/api/accounts/`
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          if (response.ok) {
            let decode = jwt_decode(token)
              if (decode) {
                const searchParam = decode.user.username
                for (let user of json.accounts) {
                  if (user.username === searchParam) {
                    setData(user)
                    }
                }
              }
          }
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }, [token]);
    /* eslint-enable */

    /* eslint-disable */
    useEffect(() => {

      setStates();

    }, [data])
    /* eslint-enable */

    return (
      <>
        <div className="container-fluid profilepage-bgimage">
        <div className="card page-center opacity-75 text-center text-dark bg-warning mb-3 rounded-corners">
          <div className="card-header">
            <h4>Welcome Back {firstName} {lastName}!</h4>
          </div>
          <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} className="rounded mx-auto d-block rounded-pill border border-dark m-3" alt="logo" width="500" height="auto" />
          <div className="card-body">
            <Link to="/" className="btn btn-dark">
              Find Next Activity
            </Link>
          </div>
          <ul className="list-group list-group-flush text-dark bg-warning mb-3">
            <li className="list-group-item text-dark bg-warning mb-3">User Name: {userName}</li>
            <li className="list-group-item text-dark bg-warning mb-3">Name: {firstName} {lastName}</li>
            <li className="list-group-item text-dark bg-warning mb-3">Email: {email}</li>
            <li className="list-group-item text-dark bg-warning mb-3">Date Joined: {dateJoined}</li>
          </ul>
        </div>
        </div>
      </>
  )
}

export default UserProfile