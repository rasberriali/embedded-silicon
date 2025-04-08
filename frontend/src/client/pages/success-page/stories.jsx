import {useEffect} from 'react'
import cpu from "../../../assets/images/cpu.png";
import siemens from "../../../assets/images/siemens.png";
import successStory from "../../../assets/images/buildingSuccess.svg";
import { useNavigate, useLocation  } from 'react-router-dom';
import { FaGlobeAmericas, FaHandshake, FaIndustry, FaCalendarAlt, FaUsers, FaBuilding } from 'react-icons/fa';


function Stories() {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

 const navigate =useNavigate();
  const storiesData = [
    {
      id: 1,
      title: "Innovative SoC for Medical Devices",
      excerpt: "Embedded Silicon successfully developed a custom ASIC solution that reduced power consumption by 40% while improving performance by 25% for a Fortune 500 technology company.",
      image: cpu,
      author: "Engineering Team",
      date: "March 15, 2022",
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
    }
  ];

  return (
    <div className="font-inter">
      {storiesData.map((story) => (
        <div key={story.id} className="mb-20 bg-white ">
          {/* Story Header */}
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
                  <span className="xl:text-sm text-xs text-white">{story.clientInfo.industry}</span>
                </div>
                <div className="relative">
                  <div className="absolute  top-0 bottom-0 w-2 bg-orange-500"></div>
                  <h2 className="text-white text-[30px] lg:text-[48px] 2xl:text-8xl font-bold leading-tight pl-6">
                    {story.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* Story Content */}
          <div className="max-w-screen-xl mx-auto p-6 lg:p-6 md:p-8 2xl:p-0 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
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
                    {story.implementation.split(', ').map((item, index) => (
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
                    {story.valueDelivered.split('. ').map((item, index) => (
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
                        <p className="text-gray-900">{story.clientInfo.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaIndustry className="text-gray-500 mr-2 text-xl" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Industry</p>
                        <p className="text-gray-900">{story.clientInfo.industry}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <FaHandshake className="text-gray-500 mr-2 text-xl" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Partnership</p>
                        <p className="text-gray-900">{story.clientInfo.partnership}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 mr-2 text-xl" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Experience</p>
                        <p className="text-gray-900">{story.clientInfo.yearsOnMarket}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t pt-4">
                    <div className="flex items-center">
                      <FaUsers className="text-gray-500 mr-2 text-xl" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Customers</p>
                        <p className="text-gray-900">{story.clientInfo.customers}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaBuilding className="text-gray-500 mr-2 text-xl" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Size</p>
                        <p className="text-gray-900">{story.clientInfo.employees}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">

               {/* Call to Action Section */}
    <div className="  mt-20 bg-[#0a0a0af8] border border-[#333] rounded-xl p-10 shadow-lg">
              <div className="flex flex-col xl:flex-row items-center justify-between">
                <div className="xl:w-2/3 xl:pr-10">
                  <div className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6">15+ Years of Excellence</div>
                  <h3 className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight">Ready to transform your technology vision?</h3>
                  <p className="text-[#647185] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed">
                    Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services.
                  </p>
                  <div className="flex flex-row gap-4">
                    <div 
                      onClick={() => navigate('/contactPage')}
                      className="bg-[#2D7BFD] hover:bg-[#1A57C2] text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full shadow-sm transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      Book a consultation
                    </div>
                    <div 
                      onClick={() => navigate('/servicesPage')}
                      className="border-2 border-[#2D7BFD] text-[#2D7BFD] hover:bg-[#2D7BFD]/10 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      Browse services
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stories
