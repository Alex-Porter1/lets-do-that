import { useToken, useAuthContext  } from './useToken'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LogoutForm(props) {
  /* eslint-disable */
  const [token_, login, logout] = useToken();
  /* eslint-enable */
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
        console.log('user not logged in, redirect to login page')
        navigate(`/login`)
    }
}, [navigate, token])

  // async function handleSubmit (e) {
  //   e.preventDefault()
  //   await logout()
  // }

  // return (
  //   <button onClick={handleSubmit} type="submit" className="btn btn-primary">Logout</button>
  // )
}

export default LogoutForm