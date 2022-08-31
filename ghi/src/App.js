import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
// import ActivityDetail from './ActivityCardBody';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { AuthProvider } from "./useToken";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="activities" element={<ActivityList />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="logout" />
              <Route path="signup" element={<SignupForm />} />
              {/* <Route path="activities/detail" element={<ActivityDetail />} /> */}
            </Routes>
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          </header>
        </div>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
