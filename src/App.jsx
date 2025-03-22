import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./client/navbar-footer/navbar";
import HomePage from "./client/pages/home-page/homePage";
import AboutPage from "./client/pages/about-page/aboutPage";
import "./index.css";
import Map from "./client/modal/Map"
import Footer from "./client/navbar-footer/footer";
import ContactPage from "./client/pages/contact-page/contactPage";
import ServicesPage from "./client/pages/services-page/servicesPage";
import ServicesDropdown from "./client/modal/services-dropdown";
import Cookies from "./client/modal/cookies";
import PrivacyPolicy from "./client/modal/privacyPolicy";
import CareersPage from "./client/pages/careers-page/careersPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Cookies/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutPage" element={<AboutPage />}/>
        <Route path="/servicesPage" element={<ServicesPage />}/>
        <Route path="/contactPage" element={<ContactPage />}/>
        <Route path="/cookies" element={<Cookies />}/>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
        <Route path="/careersPage" element={<CareersPage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;