
// ***************************************************************************** ::

// CODED BY:  ALYSA JULIANA M. EMILIO
// GITHUB:    RASBERRIALI / ALI-MANGO

// ***************************************************************************** ::


import {useEffect, useState} from 'react'
import axios from 'axios'
import cpu from "../../../assets/images/cpu.png";
import successStory from "../../../assets/images/buildingSuccess.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGlobeAmericas, FaHandshake, FaIndustry, FaCalendarAlt, FaUsers, FaBuilding } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Stories() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const categoryImageMap = {
    'ASIC Design': cpu,
    'Verification': cpu,
    'Healthcare': cpu,
    'Automotive': cpu,
    'Education': cpu,
    'R&D': cpu,
    'Semiconductor': cpu
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStory();
  }, [location]);

  const fetchStory = async () => {
    try {
      setLoading(true);
      const storyId = location.state?.storyId;
      
      if (storyId) {
        // Fetch specific story by ID
        const response = await axios.get(`${apiUrl}/success-stories/${storyId}`);
        setStory(response.data);
      } else {
        // If no ID provided, fetch the first story
        const response = await axios.get(`${apiUrl}/success-stories`);
        if (response.data && response.data.length > 0) {
          setStory(response.data[0]);
        } else {
          // Fallback to default data if no stories available
          setStory({
            title: "Innovative SoC for Medical Devices",
            excerpt: "Embedded Silicon successfully developed a custom ASIC solution that reduced power consumption by 40% while improving performance by 25% for a Fortune 500 technology company.",
            image: cpu,
            author: "Engineering Team",
            date: new Date(),
            category: "ASIC Design",
            background: "MedTech Innovations, a leading healthcare device company, was developing their next-generation wearable health monitor. They needed an ultra-low-power, high-performance chip that could fit into a compact form factor while maintaining medical-grade accuracy.",
            challenge: "Achieving sub-milliwatt power consumption for continuous monitoring, Integrating multiple sensing modules and analog front-ends, Reaching first-pass silicon success on a tight schedule",
            implementation: "1).Utilized hierarchical design methodology with reusable IP blocks, 2). Employed advanced low-power techniques such as multi-Vt libraries and power gating, 3). Integrated custom analog-mixed signal (AMS) modules, 4). Iterative RTL refinement with physical-aware synthesis",
            valueDelivered: "Reduced total design time by 35%, while improving performance by 25%.  Delivered first-pass silicon that met all performance and power targets. Enabled early market entry, helping the client gain 12% market share within six months",
            clientInfo: {
              location: "Europe",
              partnership: "Strategic partner since 2018",
              yearsOnMarket: "25+ Years",
              customers: "10M+ Customers",
              employees: "50,000+ Employees",
              industry: "Healthcare & Medical Devices"
            }
          });
        }
      }
    } catch (error) {
      console.error('Error fetching success story:', error);
      setError('Failed to load the success story');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to determine image for a story
  const getStoryImage = (story) => {
    if (story.image && !story.image.includes('undefined')) {
      return story.image;
    }
    
    return categoryImageMap[story.category] || cpu;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <button 
          onClick={() => navigate('/successStories')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Success Stories
        </button>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-gray-700 text-xl mb-4">No story found</div>
        <button 
          onClick={() => navigate('/successStories')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Success Stories
        </button>
      </div>
    );
  }

  return (
    <div className="font-inter">
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        <img 
          src={successStory} 
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10 z-10">
          <div className="flex flex-col 2xl:max-w-screen-lg max-w-2xl">
            <div className="flex items-center gap-4 mb-4 ml-7">
              <span className="xl:text-sm text-xs text-white uppercase tracking-wider">{story.category}</span>
              <span className="text-sm text-white">•</span>
              <span className="xl:text-sm text-xs text-white">{story.clientInfo?.industry || 'Technology'}</span>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 w-2 bg-orange-500"></div>
              <h2 className="text-white text-[30px] lg:text-[48px] 2xl:text-[72px] font-bold leading-tight pl-6">
                {story.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="max-w-screen-xl mx-auto p-6 lg:p-6 md:p-8 2xl:p-0 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Background</h3>
              <p className="text-gray-700">{story.background}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Challenge</h3>
              <p className="text-gray-700">{story.challenge}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <ul className="list-none space-y-3">
                {story.implementation?.split(', ').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 text-2xl mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Delivered by Embedded Silicon</h3>
              <ul className="list-none space-y-3">
                {story.valueDelivered?.split('. ').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 text-2xl mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Information</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <FaGlobeAmericas className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-gray-900">{story.clientInfo?.location || 'Global'}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Industry</p>
                    <p className="text-gray-900">{story.clientInfo?.industry || 'Technology'}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <FaHandshake className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Partnership</p>
                    <p className="text-gray-900">{story.clientInfo?.partnership || 'Ongoing'}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Experience</p>
                    <p className="text-gray-900">{story.clientInfo?.yearsOnMarket || '10+ Years'}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div className="flex items-center">
                  <FaUsers className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Customers</p>
                    <p className="text-gray-900">{story.clientInfo?.customers || 'Millions Worldwide'}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaBuilding className="text-gray-500 mr-2 text-xl" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Size</p>
                    <p className="text-gray-900">{story.clientInfo?.employees || 'Enterprise'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-50 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('../../../assets/images/circuit-pattern.png')] opacity-5"></div>
          <div className="bg-gradient-to-r font-inter from-[#0a0a0af8] to-[#0B2B82] border border-[#333] rounded-2xl p-10 md:p-12 shadow-2xl relative z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="flex flex-col xl:flex-row items-center justify-between relative z-10">
              <div className="xl:w-2/3 xl:pr-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6"
                >
                  15+ Years of Excellence
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight"
                >
                  Ready to transform your technology vision?
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#E0E0E0] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed"
                >
                  Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services. Let's create the future together.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-row gap-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contactPage')}
                    className="bg-[#2D7BFD] hover:bg-[#1A57C2] text-white py-2 xl:px-8 px-6 rounded-full shadow-lg transition-all xl:text-base text-xs font-semibold"
                  >
                    Book a call
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/servicesPage')}
                    className="border-2 border-white text-white hover:bg-white/10 py-2 xl:px-8 px-6 rounded-full transition-all xl:text-base text-xs font-semibold"
                  >
                    Browse services
                  </motion.button>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="xl:w-1/3 mt-12 xl:mt-0"
              >
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="text-white font-semibold text-lg mb-6">Why Choose Us?</h4>
                  <ul className="text-white/90 space-y-4">
                    <li className="flex items-center">
                      <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Industry-leading expertise</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Proven track record</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>End-to-end solutions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Customer-centric approach</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stories;
