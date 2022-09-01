import { NavLink } from 'react-router-dom';


function Nav() {

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-new">
      <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Let's Do That</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/signup/new">Sign Up</NavLink>
        </li>
        <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
            </ul>
        </div>
        </div>
        </nav>
)
}

export default Nav;