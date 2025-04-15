import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function CookiePolicy() {
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
    <div className='font-inter'>
      <div className='max-w-screen-sm mx-auto p-6 2xl:p-0 mt-6 lg:mt-10 2xl:mt-20'>
        <div className='flex flex-col justify-center items-start leading-9'>
          <h1 className='xl:text-5xl text-4xl font-bold text-center mb-8'>🍪 Cookie Policy</h1>
          <p className='text-start mt-4'><strong>Effective Date:</strong> 10/04/2025</p>
          
          <p>
            This Cookie Policy explains how we use cookies and similar technologies on our website. By using our site, you agree to the use of cookies as outlined in this policy.
          </p>
          
          <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide useful information for improving user experience.
          </p>

          <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>2. What Types of Cookies We Use</h2>
          
          <h3 className='text-xl font-bold mt-4 mb-2'>a. Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions like:
          </p>

          <ul className='list-disc pl-6 mb-4 ml-5'>
            <li>Submitting a contact form</li>
            <li>Navigating pages</li>
          </ul>
         
          
          <h3 className='text-xl font-bold mt-4 mb-2'>b. Performance & Analytics Cookies</h3>
          <p>
            We may use cookies (such as Google Analytics) to understand how visitors interact with our website, which helps us improve performance and content.
          </p>
          <p>
            These cookies collect aggregated, anonymous data and do not personally identify visitors.
          </p>
          
          <h3 className='text-xl font-bold mt-4 mb-2'>c. Functionality Cookies</h3>
          <p>
            These allow the website to remember choices you've made, like language or region, to offer a more personalized experience.
          </p>
          
          <h3 className='text-xl font-bold mt-4 mb-2'>d. Third-Party Cookies</h3>
          <p>
            Some content (like embedded videos or social media buttons) may use cookies from other websites. These third parties may collect data about your interaction with their services.
          </p>
          

          <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>3. Managing Cookies</h2>
          <p>
            You can control or delete cookies through your browser settings. Most browsers let you:
          </p>
          <ul className='list-disc pl-6 mb-4 ml-5'>
            <li>See what cookies you have</li>
            <li>Block third-party cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            To learn more, visit:
          </p>
          <ul className='list-disc pl-6 mb-4'>
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>4. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy occasionally to reflect changes in technology, law, or our services. Please revisit this page periodically.
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

export default CookiePolicy; 