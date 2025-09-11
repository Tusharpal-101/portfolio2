
// import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Banner from './component/Banner';
import Script from './script';
import SearchCategories from './component/SearchCategories';
import Home from './component/pages/Home';
import Rainanimation from "../src/component/pages/Rainanimation"
import Contact from './component/contact/Contact';
import About from './component/about/About';

function App() {
  return (
    <>
     <Router>
          <Navbar/>
           <Rainanimation/> 
      <Routes>
        <Route path="/" element={<Home/> } /> 
         {/* <Route path="/about" element={<SearchCategories/> } />  */}
          <Route path="/contact" element={<Contact/> } /> 
           <Route path="/about" element={<About/> } /> 
            <Route path="/service" element={<SearchCategories/> } /> 
           {/* 404 Page */}
      </Routes>
    </Router>
     {/* <Script/> */}
    </>
  );
}

export default App;
