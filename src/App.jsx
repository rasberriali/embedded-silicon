import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./client/navbar-footer/navbar";
import HomePage from "./client/pages/home-page/homePage";
import AboutPage from "./client/pages/about-page/aboutPage";
import "./index.css";
import Map from "./client/modal/Map"
import Footer from "./client/navbar-footer/footer";
import ContactPage from "./client/pages/contact-page/contactPage";






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutPage" element={<AboutPage />}/>
        <Route path="/contactPage" element={<ContactPage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


//map

