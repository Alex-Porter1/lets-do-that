import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useToken, useAuthContext } from './useToken'

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
  // const [birthday, setBirthday] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const { token } = useAuthContext();
  const [signup] = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
        console.log('user has logged in')
        navigate(`/activities`)
        // redirect
    }
  }, [navigate, token])

  async function handleSubmit (e) {
    e.preventDefault()
    await signup(userName, password, email, first, last)
  }

  const signupPhrase = `Already have an account? Login here.`

  return (
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
  )
}

export default SignupForm