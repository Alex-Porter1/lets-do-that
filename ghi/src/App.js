import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import MainPage from './MainPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { AuthProvider } from "./useToken";
import LogoutForm from './LogoutForm'
import UserProfile from "./UserProfile";
import React from "react";
import "./MainPage.css"





function App() {

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  // use context hook here
    // define var that holds value and func that changes value
    // may need to wrap everything in a component similiar to AuthPrrovider
    // all compponents need to be in the usecontext wrapper
    // define which hooks and states will be passed down
  return (
    <AuthProvider>
      <BrowserRouter basename={basename}>
        <div className="App">

          <header className="App-header">
            <Routes>
              <Route path="" element={<MainPage />} />
              <Route path="activities">
                <Route path="" element={<ActivityList />} />
                <Route path=":activityName/:yelpID" element={<ActivityDetail />} />
              </Route>
              <Route path="accounts" element={<UserProfile />} />
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
