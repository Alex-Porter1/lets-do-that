import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useToken, useAuthContext } from './useToken';
import './index.css'

function BootstrapInputFields(props) {
  const { id, label, value, onChange, type, placeholder } = props;

  return (
    <div className="mb-3 ">
        <label htmlFor={id} className="form-label">{label}</label>
        <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder} />
      </div>
  )
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /* eslint-disable */
  const [token_, login] = useToken();
  /* eslint-enable */
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const signupPhrase = `Don't have an account? \n Sign up here`;
  const [ErrorMessage, setErrorMessage] = useState(false);


  useEffect(() => {
      if(token) {
        console.log('user has logged in')
        navigate(`/`)
        // redirect
    }
    else {
      console.log("Invalid Username")
    }

  }, [navigate, token])


  async function handleSubmit (e) {
    e.preventDefault()
    await login(username, password)
    if (token) {
      setErrorMessage(false)
    }
    else{
      console.log("INVALID USERNAME")
      setErrorMessage(true)
      console.log(ErrorMessage)
    }
  }

  return (
    <>
    <div className="container-fluid loginpage-bgimage">
    <div className="text-center">
        <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
    </div>

    <div className="card shadow p-4 mt-4 offset-3 col-6 bg-for-text">
      <div className="card-header mb-3">
        <h2>Login</h2>
      </div>
        <form onSubmit={handleSubmit}>
          <BootstrapInputFields
            id="username"
            label="Enter Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
          <BootstrapInputFields
            id="password"
            label="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/signup" className="float-end" variant="body2">
            {signupPhrase}
          </Link>
        </form>

      </div>
      <div className='text-center mt-4' style={{ color: 'red'}} >
      {ErrorMessage ? <h5>Invalid Username or Password</h5> : ''}
      </div>
      </div>
      </>
  )
}

export default LoginForm