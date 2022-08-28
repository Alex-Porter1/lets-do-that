<<<<<<< HEAD

import './App.css';

import SignUpForm from './SignUpForm';
import MainPage from './MainPage';
// @mui material components

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
=======
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
// import ActivityDetail from './ActivityCardBody';

// // @mui material components
>>>>>>> main
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from './assets/theme';
import Presentation from './layouts/pages/presentation';

// Material Kit 2 React routes
import routes from './routes';

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="signup" element={<SignUpForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="">
          </Route>
      </Routes>
    </ThemeProvider>
  );
}
// // Material Kit 2 React themes
// import theme from "assets/theme";

<<<<<<< HEAD
=======
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="activities" element={<ActivityList />} />
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
    
  );
}
>>>>>>> main


