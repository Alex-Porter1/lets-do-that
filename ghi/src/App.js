// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import MainPage from './MainPage';
import { useEffect, useState } from 'react';
// import ActivityDetail from './ActivityCardBody';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { AuthProvider } from "./useToken";
import Nav from './Nav';
import LogoutForm from './LogoutForm'
// import styled from 'styled-components';
// import PopUpsGallery from './PopUpsGallery';
// import { createGlobalStyle } from 'styled-components';




function App() {

  return (
    
    <AuthProvider>
      <BrowserRouter>
      <Nav />
        <div className="App">
          <header className="App-header">
            <Routes>
            <Route path="MainPage" element={<MainPage />} />
            <Route path="activities">
              <Route path="" element={<ActivityList />} />
              <Route path=":activityName/:yelpID" element={<ActivityDetail />} />
            </Route>
              <Route path="login" element={<LoginForm />} />
              <Route path="logout" element={<LogoutForm />} />
              <Route path="signup" element={<SignupForm />} />
            </Routes>
            {/* <StyledParent>
              <GlobalStyle></GlobalStyle>
              <PopUpsGallery></PopUpsGallery>
 </StyledParent> */}
          
  
            </header>
            </div>
            </BrowserRouter>
    </AuthProvider>
        
         
      
        
);
          }

export default App;
