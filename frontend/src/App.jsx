import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./client/navbar-footer/navbar";
import HomePage from "./client/pages/home-page/homePage";
import AboutPage from "./client/pages/about-page/aboutPage";
import "./index.css";
import Footer from "./client/navbar-footer/footer";
import ContactPage from "./client/pages/contact-page/contactPage";
import ServicesPage from "./client/pages/services-page/servicesPage";
import Cookies from "./client/modal/cookies";
import PrivacyPolicy from "./client/modal/privacyPolicy";
import CookiePolicy from "./client/modal/cookiePolicy";
import Leadership from "./client/pages/about-page/Leadership";
import Awards from "./client/pages/about-page/Awards";
import Industry from "./client/pages/about-page/Industry";
import CareersPage from "./client/pages/careers-page/careersPage";
import Fullvlsi from "./client/pages/services-page/fullvlsi";
import OurClients from "./client/pages/about-page/ourclients";
import CMS from "./client/pages/careers-page/cms";
import JobList from "./client/pages/careers-page/jobList";
import JobCategories from "./client/pages/careers-page/jobCategories";
import JobDetails from "./client/pages/careers-page/jobDetails";
import SuccessStories from "./client/pages/success-page/successStories";
import Stories from "./client/pages/success-page/stories";
import SuccessStoriesCMS from "./client/pages/success-page/successStoriesCMS";
import IntegratedChipDesign from "./client/pages/integrated-chip-design/integrated-chip-design";
import NewsPage from "./client/pages/news-page/newsPage";
import NewsDetails from "./client/pages/news-page/newsDetails";
import AdminLogin from "./client/pages/docs/admin";
import { useNavigate } from "react-router-dom";

// Add this function to check authentication
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/docs/admin');
    }
  }, [token, navigate]);

  return token ? children : null;
};

function App() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
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
        <Route path="/stories" element={<Stories />}/>
        <Route path="/cookies" element={<Cookies />}/>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
        <Route path="/cookiePolicy" element={<CookiePolicy />}/>
        <Route path="/careersPage" element={<CareersPage />}/>
        <Route path="/successStories" element={<SuccessStories />}/>
        <Route path="/fullvlsi" element={<Fullvlsi />}/>
        <Route path="/docs/admin" element={<AdminLogin />}/>
        <Route path="/jobs" element={<JobList/>}/>
        <Route path="/newsPage" element={<NewsPage/>}/>
        <Route path="/jobCategories" element={<JobCategories/>}/>
        <Route path="/careers/job/:id" element={<JobDetails/>}/>
        <Route path="/newsDetails" element={<NewsDetails/>}/>
        <Route path="/success-stories-cms" element={<SuccessStoriesCMS/>}/>
        <Route path="/integrated-chip-design" element={<IntegratedChipDesign/>}/>
        <Route path="/cms" element={
          <ProtectedRoute>
            <CMS />
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
