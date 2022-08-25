
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUpForm from './SignUpForm';
import MainPage from './MainPage';
// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="">
          </Route>
      </Routes>


    </BrowserRouter>
  
  )
}

export default App;
