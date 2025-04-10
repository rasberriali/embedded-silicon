import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


const Cookies = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Always show the cookie notice on page load/refresh
    setIsVisible(true);
  }, []);

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

  const handlePrivacyPolicyClick = () => {
    navigate('/privacyPolicy');
  };

  const handleCookiePolicyClick = () => {
    navigate('/cookiePolicy');
  };


  return (
    isVisible && (
      <>
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-blue-600/95 max-w-xl p-6 shadow-xl border border-blue-700 font-inter rounded-lg">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-2">🍪</span>
              <h3 className="font-bold text-xl text-white">Cookie Notice</h3>
            </div>
            <p className="text-white mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All Cookies", you consent to our use of cookies. 
              <a 
                href="/cookiePolicy" 
                className="text-black font-semibold hover:underline ml-1 cursor-pointer bg-transparent border-none p-0"
              >
                Read Cookie Policy
              </a>
             <span className="font-extralight ml-1"> 
                &
              </span>
              <a 
                href="/privacyPolicy" 
                className="text-black font-semibold hover:underline ml-1 cursor-pointer bg-transparent border-none p-0"
              >
                Privacy Policy 
              </a>
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
