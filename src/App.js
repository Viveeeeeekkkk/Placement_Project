import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./Login-pages/Login1.js"; 
import Login2 from "./Login-pages/Login2.js"; 
import Login3 from "./Login-pages/Login3.js"; 
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login1" element={<div><Header/><Login1/><Footer/></div>}></Route>
          <Route path="/login2" element={<div><Header/><Login2/><Footer/></div>}></Route>
          <Route path="/login3" element={<div><Header/><Login3/><Footer/></div>}></Route>
          <Route path="/" element={<div><Header/><Home/><Footer/></div>}></Route>
          <Route path="/dashb" element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
