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
    <div className='max-w-screen-lg mx-auto p-6 2xl:p-0 font-inter mt-6 lg:mt-10 2xl:mt-20'>
      <div className='flex flex-col justify-center items-start leading-9'>
        <h1 className='xl:text-5xl text-4xl font-bold text-center mb-8'>🔐 Privacy Policy</h1>
        <p className='text-start mt-4'><strong>Effective Date:</strong> 05/20/2024</p>
        
        <p>
          Thank you for visiting our website. We value your privacy and are committed to protecting any personal information you provide to us.
        </p>


       <p>
         <h1 className='mt-6 mb-4 text-xl font-bold'>
          Objective
        </h1>
        <ul className='list-disc pl-6 mb-4'>
          <li>To comply with the requirements of Data Privacy Act of 2012 </li>
          <li>To set guidelines on the processing of personal information</li>
          <li>To adhere to the principles of personal data privacy - transparency, legitimate purpose, and propotionality</li>
          <li>This guideline covers the policy for collection, storage, and processing of personal information in the area of resposibility of the company</li>
        </ul>
       </p>
        
        <h1 className='mt-6 mb-4 text-xl font-bold'>
          Scope
        </h1>
        <ul className='list-disc pl-6 mb-4'>
          <li>To comply with the requirements of Data Privacy Act of 2012 </li>
          <li>To set guidelines on the processing of personal information</li>
          <li>To adhere to the principles of personal data privacy - transparency, legitimate purpose, and propotionality</li>
        </ul>

      <p className='mt-10 mb-10'>
      Embedded Silicon Technology Solutions Corp. (ESI; the company) collects and processes personal information while
       adhering to the principles of transparency, legitimate purpose, and proportionality, and subject to the 
       compliance with Republic Act 10173 or the Data Privacy Act of 2012 and its Implementing Rules and Regulations.
        Personal information is hereby defined as any information that identifies or can identify an individual
      </p>

        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>Collection and Processing of Personal Information</h2>
        <p>
        ESI collects, stores, and processes personal information from: 
        </p>
        <p className='ml-4'>
        a.	former, current, and prospective employees. Personal data may be 
        collected as part of sourcing and selection during recruitment, and in
         the course of employment of an individual. The data collected are processed
          for the purposes of hiring, delivering salaries and wages, and for workforce learning and development. These data include: 
        </p>
        <ul className='list-disc pl-6 mb-4 m-8'>
          <li>name and signature </li>
          <li>contact information such as address, mobile number, landline number, and email address </li>
          <li>date and place of birth, nationality, religion, civil status </li>
          <li>educational background and work experience </li>
          <li>name of spouse, children, parents, and siblings, if necessary </li>
          <li>professional licenses and certifications </li>
          <li>health information  </li>
          <li>background information such as police, barangay, and NBI clearances and records </li>
          <li>performance rating, salaries and benefits, career movements of current employees </li>
          <li>bank account information for administering payroll  </li>
          <li>name and contact details of references and contact persons  </li>
        </ul>
       


      
      
        <p className='ml-4'>
       b.	direct and indirect clients. Personal information is collected to
         be used for deliveries, addressing concerns, and feedback.
          These data gathered through online portals and forwarded to ESI for processing include: 
        </p>
        <ul className='list-disc pl-6 mb-4 m-8'>
          <li>name</li>
          <li>contact information such as address and email address  </li>
          <li>date and place of birth, nationality, religion, civil status </li>
          <li>bank account information  </li>
          <li>signature, if possible  </li>
        </ul>


        <p className='ml-4'>
       c. individuals with business transactions with ESI such as external providers. 
       Collected personal information may be used for establishing open communication, 
       facilitating transactions, and for performing accreditation activities in the case of external providers. These may include: 
        </p>
        <ul className='list-disc pl-6 mb-4 m-8'>
          <li>name and signature</li>
          <li>contact information such as address, mobile number, landline number, and email address  </li>
          <li>bank account information of individual external providers  </li>
        </ul>
       
        <p className='ml-4'>
        d.	other interested parties initiating contact with ESI through 
        inquiry portals such as, e-mail, other online platforms, and phone. 
        The personal information gathered will be used solely for addressing
         the concern and is shared only with concerned and authorized personnel of ESI. 
        </p>

        
        <p className='mt-6'>
        ESI retains personal information only for a period necessary
         to fulfill the purposes outlined in this Privacy Policy and 
         according to the retention policies set by the company. 
         Disposal of personal information is done in a secure manner to prevent unintended disclosure and further processing. 
        </p>

        <p className='mt-6'>
        The personal information under the custody of ESI is 
        only shared with concerned personnel such as the data 
        processors for the Human Resource Development and Procurement processes,
         and other authorized recipients of such data. ESI may disclose personal
          information with any of its third parties who need access to such 
          information to carry out work on behalf of ESI, provided that similar 
          levels of security measures are in place. If and when necessary, data
           sharing or nondisclosure agreements (NDA) are accomplished to cover
            terms and policies on the personal information shared between ESI and its third parties. 
        </p>

        <p className='mt-6 mb-10'>
          ESI reserves the right to disclose any personal information under its custody if the company is compelled to do so in compliance with applicable laws and obligations.
        </p>


        <h2 className='text-2xl font-bold mt-6 mb-3 text-blue-600'>Information Sharing</h2>
        <h2 className='text-xl font-bold mt-6 mb-3 text-blue-600 underline'>Security of Personal Infromation</h2>
       <p>
        ESI implements policies and procedures intended to ensure that perosnal information in the
         custody of the company is sufficiently protected. These include organizational, admistrative,
          technical and physical security measures to safegurad the confidentiality, integrity,
           and avalilability of the personal information. Additionally, an information security
            management system is being implemented by the company with extensive contrls uncluding protection of personal information.
       </p>

       <h2 className='text-xl font-bold mt-6 mb-3 text-blue-600 underline'>Your Rights as a Data Subject</h2>
       <p>
        ESI implements policies and procedures intended to ensure that perosnal information in the
         custody of the company is sufficiently protected. These include organizational, admistrative,
          technical and physical security measures to safegurad the confidentiality, integrity,
           and avalilability of the personal information. Additionally, an information security
            management system is being implemented by the company with extensive contrls uncluding protection of personal information.
       </p>

       <h2 className='text-xl font-bold mt-6 mb-3 text-blue-600 underline'>Contact Us</h2>
       <p>
       Should you have any concerns or queries regarding our Privacy Policy and your tights as a data subject please contact our Data Protection Officer at [...].
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
