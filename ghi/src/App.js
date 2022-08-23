import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpForm from '.SignUpForm';
// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <Routes>
        <Route path= "/signup">
          <Route path="new" element={<SignUpForm />} />
        </Route>
      </Routes>
    </Nav>
    </BrowserRouter>
  
  )
}

export default App;
