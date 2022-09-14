import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useToken, useAuthContext } from './useToken'

function UserProfile(props) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setData] = useState([]);
    const { token } = useAuthContext();

    async function parseJwt(token) {
      if (!token) { return; }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      console.log("JWT FUNCTION RETURN: ", JSON.parse(window.atob(base64)))
      return JSON.parse(window.atob(base64));
    }

    useEffect(() => {
      const url = "http://localhost:8080/api/accounts/"
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          let criteria = await parseJwt(token)
          console.log("CRITERIA1: ", criteria, "\n", "JSON: ", json)
          criteria = await criteria.user.username
          if (response.ok) {
            for (let user of json.accounts) {
              console.log("CHECKING JSON IN LOOP: ", json.accounts)
              if (user.username === criteria) {
                setData(user)
                console.log("USER: ", user)
                }
            }
            console.log("is this you: ", json);
            setStates()
          }
        } catch (error) {
            console.log("error", error);
        }
      };
      fetchData();
    }, []);

function setStates() {
    console.log("SETSTATES: ", data)
    setUserName(data.username)
    setEmail(data.email)
    setFirstName(data.first_name)
    setLastName(data.last_name)
}
// if statement based on state I want otherwise loading page
// {condition && }
return (
  <>
  {/* <div class="col d-flex justify-content-center"> */}
    <div className="card text-center margin-left row ">
      <div className="card-header">
        Lets Do That
      </div>
      <div className="card-body">
      <div className="text-center">
        <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
      </div>
        <Link to="/activities/" className="btn btn-primary">
          Find Next Activity
        </Link>
      </div>
    </div>
  {/* </div> */}
  <div className="card card w-25">
    <div className="m-3">
      <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} className="rounded mx-auto d-block img-thumbnail" alt="logo" width="250" height="100" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{userName}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  </>
)
}

export default UserProfile