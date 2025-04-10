import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       setIsVisible(true);
//     }
//   }, []);

  useEffect(() => {
    // Check if we're on the Privacy Policy or Cookie Policy pages
    const currentPath = location.pathname;
    if (currentPath === '/privacyPolicy' || currentPath === '/cookiePolicy') {
      setIsVisible(false);
    } else {
      // Always show the cookie notice on other pages
      setIsVisible(true);
    }
  }, [location]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted_all");
    localStorage.setItem("hideCookieNotice", "true");
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", "accepted_essential");
    localStorage.setItem("hideCookieNotice", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("hideCookieNotice", "true");
    setIsVisible(false);
  };

  const handlePreferences = () => {
    navigate('/privacyPolicy');
  };

  const handleCookiePolicy = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = window.location.origin + '/cookiePolicy?hideCookies=true';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrivacyPolicy = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = window.location.origin + '/privacyPolicy?hideCookies=true';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    isVisible && (
      <>
        <div className="fixed inset-0 bg-black/5 backdrop-blur-xs z-40"></div>
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-600/95 max-w-xl p-6 shadow-xl border border-blue-700 mx-10 font-inter">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-2">🍪</span>
              <h3 className="font-bold text-xl text-white">Cookie Notice</h3>
            </div>
            <p className="text-white mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All Cookies", you consent to our use of cookies. 
              <button onClick={handleCookiePolicy} className="text-black font-semibold hover:underline ml-1 cursor-pointer bg-transparent border-none p-0">
                Read Cookie Policy
              </button>
             <span className="font-extralight ml-1"> 
                &
              </span>
              <button onClick={handlePrivacyPolicy} className="text-black font-semibold hover:underline ml-1 cursor-pointer bg-transparent border-none p-0">
                Privacy Policy 
              </button>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={handleDecline} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg w-full sm:w-auto"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAcceptEssential} 
                  className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg w-full sm:w-auto"
                >
                  Essential Only
                </button>
                <button 
                  onClick={handleAcceptAll} 
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg w-full sm:w-auto"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Cookies;
