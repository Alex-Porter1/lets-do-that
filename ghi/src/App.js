import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';
// import ActivityDetail from './ActivityCardBody';



function App() {
  // const [activities, setActivities] = useState({});

  // useEffect ( 

  // )





  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path="activities">
              <Route path="" element={<ActivityList />} />
              <Route path="detail" element={<ActivityDetail />} />
            </Route>
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

export default App;
