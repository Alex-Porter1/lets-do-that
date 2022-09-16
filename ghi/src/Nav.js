import { NavLink } from 'react-router-dom';
import { useToken, useAuthContext } from './useToken'

function Nav() {
  const { token } = useAuthContext();
  /* eslint-disable */
  const [token_, login, logout] = useToken();
  /* eslint-enable */

  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="">
          <img className="d-inline-block align-top" width="150" height="auto" src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {!token && (
              <NavLink className="nav-link text-black" to="/login">Login</NavLink>
              )}
            </li>
            <li className="nav-item">
              {token && (
                <NavLink className="nav-link text-black" to="">Category List</NavLink>
                )}
            </li>
            <li className="nav-item">
              {token && (
                <NavLink className="nav-link text-black" to="/accounts/">Profile</NavLink>
                )}
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className="nav-item">
              {token && (
                <NavLink onClick={logout} to="/logout" className="nav-link text-black">
                  Logout
                </NavLink>
              )}
            </li>

          </ul>
          </div>
        </div>
        </nav>


  )
}

export default Nav;
