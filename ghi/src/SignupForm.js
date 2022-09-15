import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useToken, useAuthContext } from './useToken'
import "./index.css"

function BootstrapInputFields(props) {
  const { id, label, value, onChange, type, placeholder } = props;

  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder} />
      </div>
  )
}



function SignupForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const { token } = useAuthContext();
  const [ErrorMessage, setErrorMessage] = useState(false);
  /* eslint-disable */
  const [token_, login_, logout_, signup] = useToken();
  /* eslint-enable */
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
        console.log('user has logged in')
        navigate(`/`)

        // redirect
    }
  }, [navigate, token])

  async function handleSubmit (e) {
    e.preventDefault()
    await signup(userName, password, email, first, last)
    if (token) {
      setErrorMessage(false)
    }
    else {
      setErrorMessage(true)
    }
  }

  const signupPhrase = `Already have an account? Login here.`

  return (
    <>
    <div className="container-fluid signup-bgimage">
    <div className="text-center">
      <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
    </div>
    <div className="card shadow p-4 mt-4 offset-3 col-6">
      <div className="card-header mb-3">
        <h2>Signup</h2>
      </div>
        <form onSubmit={handleSubmit}>
          <BootstrapInputFields
            id="first"
            label="Enter First Name"
            value={first}
            onChange={e => setFirst(e.target.value)}
            type="text"
            placeholder="First name"
          />
          <BootstrapInputFields
            id="last"
            label="Enter Last Name"
            value={last}
            onChange={e => setLast(e.target.value)}
            type="last"
            placeholder="Last name"
          />
          {/* <BootstrapInputFields
            id="birthday"
            label="Enter Birthday"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            type="date"
            placeholder="birthday"
          /> */}
          <BootstrapInputFields
            id="email"
            label="Enter Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="name@website.com"
          />
          <BootstrapInputFields
            id="username"
            label="Enter Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
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
          <Link to="/login" className="float-end" variant = "body2">
            {signupPhrase}
          </Link>
        </form>
      </div>
      <div className='text-center mt-4' style={{ color: 'red'}} >
      {ErrorMessage ? <h5>Email or Username already exists</h5> : ''}
      </div>
      </div>
    </>
  )
}

export default SignupForm