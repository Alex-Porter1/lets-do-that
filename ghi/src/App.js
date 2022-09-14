import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import MainPage from './MainPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { AuthProvider } from "./useToken";
import Nav from './Nav';
import LogoutForm from './LogoutForm'
import React, { useState } from "react";
import "./MainPage.css"





function App() {

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  return (
    
    <AuthProvider>
      <BrowserRouter basename={basename}>
      <Nav />
        <div className="App">

          <header className="App-header">
            <Routes>
              <Route path="" element={<MainPage />} />
              <Route path="activities">
                <Route path="" element={<ActivityList />} />
                <Route path=":activityName/:yelpID" element={<ActivityDetail />} />
              </Route>
              <Route path="login" element={<LoginForm />} />
              <Route path="logout" element={<LogoutForm />} />
              <Route path="signup" element={<SignupForm />} />
            </Routes>
          </header>
          </div>
      </BrowserRouter>
    </AuthProvider>
       );

  }

export default App;
