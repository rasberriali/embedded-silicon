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
import Cookies from "./client/modal/cookies";
import PrivacyPolicy from "./client/modal/privacyPolicy";
import Leadership from "./client/pages/about-page/Leadership";
import Awards from "./client/pages/about-page/Awards";
import Industry from "./client/pages/about-page/Industry";
import CareersPage from "./client/pages/careers-page/careersPage";
import Fullvlsi from "./client/pages/services-page/fullvlsi";
import OurClients from "./client/pages/about-page/ourclients";
import CMS from "./client/pages/careers-page/cms";
import JobList from "./client/pages/careers-page/jobList";
import JobCategories from "./client/pages/careers-page/jobCategories";


function App() {
  return (
    <Router>
      <Navbar />
      <Cookies/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Industry" element={<Industry />} />
        <Route path="/aboutPage" element={<AboutPage />}/>
        <Route path="/Awards" element={<Awards />} />
        <Route path="/ourclients" element={<OurClients />}/>
        <Route path="/servicesPage" element={<ServicesPage />}/>
        <Route path="/contactPage" element={<ContactPage />}/>
        <Route path="/cookies" element={<Cookies />}/>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
        <Route path="/careersPage" element={<CareersPage />}/>
        <Route path="/fullvlsi" element={<Fullvlsi />}/>
        <Route path="/cms" element={<CMS/>}/>
        <Route path="/jobs" element={<JobList/>}/>
        <Route path="/jobCategories" element={<JobCategories/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
