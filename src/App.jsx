import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./client/navbar-footer/navbar";
import HomePage from "./client/pages/home-page/homePage";
import "./index.css";
import Map from "./client/modal/Map"





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/Map" element={<Map/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
