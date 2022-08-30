import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import MainPage from './MainPage';
import { useEffect, useState } from 'react';
// import ActivityDetail from './ActivityCardBody';



function App() {

  return (
  
    <BrowserRouter>
    <Nav />
      
          <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="">
              </Route>
            <Route path="activities">
              <Route path="" element={<ActivityList />} />
              <Route path="detail" element={<ActivityDetail />} />
            </Route>
          </Routes>
    

    </BrowserRouter>
    
    
  );
}

export default App;
