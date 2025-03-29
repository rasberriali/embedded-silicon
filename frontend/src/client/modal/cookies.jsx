import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       setIsVisible(true);
//     }
//   }, []);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const handlePreferences = () => {
    alert("Manage your preferences clicked! (You can replace this with a modal)");
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 left-5 bg-white max-w-xl p-4 rounded-lg shadow-lg border border-gray-200 z-50">
        <span className="font-semibold text-gray-800 flex items-center">🍪 Cookie Notice</span>
        <p className="mt-2 text-sm text-gray-600">
          We use cookies to ensure the best experience.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Read Cookie Policy
          </a>.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3 cursor-pointer">
          <button onClick={() => navigate('/PrivacyPolicy')} className="text-sm text-gray-700 underline hover:text-gray-500">
            Manage Preferences
          </button>
          <div className="flex flex-row gap-2">
            <button onClick={handleDecline} className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
            Decline
          </button>
          <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
            Accept
          </button>
          </div>
          
        </div>
      </div>
    )
  );
};

export default Cookies;
