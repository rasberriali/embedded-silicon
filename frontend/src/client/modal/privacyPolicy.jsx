import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
      
      // Check if the hideCookies parameter is present in the URL
      const searchParams = new URLSearchParams(location.search);
      if (searchParams.get('hideCookies') === 'true') {
        // Set a flag in localStorage to hide the cookie notice
        localStorage.setItem('hideCookieNotice', 'true');
      }
    }, [location]);
    
  return (
    <div>
    <div className='max-w-screen-sm mx-auto p-6 2xl:p-0 font-inter mt-6 lg:mt-10 2xl:mt-20'>
      <div className='flex flex-col justify-center items-start leading-9'>
        <h1 className='xl:text-5xl text-4xl font-bold text-center mb-8'>🔐 Privacy Policy</h1>
        <p className='text-start mt-4'><strong>Effective Date:</strong> 10/04/2025</p>
        
        <p>
          Thank you for visiting our website. We value your privacy and are committed to protecting any personal information you provide to us.
        </p>
        
        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>1. Information We Collect</h2>
        <p>
          When you use our contact form, we may collect:
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Any other information you choose to provide in your message</li>
        </ul>
        <p>
          We do not collect any data for account creation, login, or user registration.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>2. How We Use Your Information</h2>
        <p>
          We use the information you submit through the contact form solely for the purpose of responding to your inquiry or message.
        </p>
        <p>
          We do not use this information for marketing purposes unless you explicitly request or consent to it.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>3. How We Protect Your Information</h2>
        <p>
          We take reasonable steps to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>4. Third-Party Services</h2>
        <p>
          We do not share your personal information with third parties, except where required by law.
        </p>
        <p>
          Our website may use analytics or other third-party tools that may collect anonymized data (see our Cookie Policy).
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>5. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li>Request access to the personal information we hold about you</li>
          <li>Ask us to correct or delete that information</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information below.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, feel free to contact us at:
        </p>
        <p>
          📧 Email: info@esilicontech.com<br />
          📍 Address: <br/>- Unit 601 Richville Corporate Tower,
          Alabang - Zapote Road, Madrigal Business Park, Ayala Alabang, Muntinlupa City 1780 PH <br/> - B21 L9 Brazilianite St.,
Golden City Subdivision,
Taytay, Province of Rizal 1920 PH
        </p>
      </div>
      </div>
      {/* Call to Action Section - Full Width */}
      <div className="w-full mt-20 -mb-80">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="w-full bg-gradient-to-r from-[#0a0a0af8] to-[#0B2B82] border border-[#333] p-10 shadow-lg"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between">
              <div className="xl:w-2/3 xl:pr-10">
                <div className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6">15+ Years of Excellence</div>
                <h3 className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight">Ready to transform your technology vision?</h3>
                <p className="text-[#E0E0E0] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed">
                  Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services.
                </p>
                <div className="flex flex-row gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contactPage')}
                    className="bg-blue-600 hover:bg-blue-700 py-3 px-10 text-white transition-colors xl:text-sm text-xs font-semibold cursor-pointer"
                  >
                    GET IN TOUCH
                  </motion.div>
                </div>
              </div>
              <div className="xl:w-1/3 mt-10 xl:mt-0">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-4">Why Choose Us?</h4>
                  <ul className="text-white/80 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Industry-leading expertise
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Proven track record
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      End-to-end solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
    </div>
  );
}

export default PrivacyPolicy;
