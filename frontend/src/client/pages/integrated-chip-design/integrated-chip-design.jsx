
// ***************************************************************************** ::

// CODED BY:  ALYSA JULIANA M. EMILIO
// GITHUB:    RASBERRIALI / ALI-MANGO

// ***************************************************************************** ::


import {useEffect} from 'react';
import successStory from "../../../assets/images/buildingSuccess.svg";
import icd from "../../../assets/images/icd.svg";
import contact from "../../../assets/images/contact.svg";
import { useNavigate } from 'react-router-dom';


const IntegratedChipDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const navigate = useNavigate();
  return (
    <div>
    <div className="relative font-inter xl:h-[100vh] h-[60vh] overflow-hidden">
       <img
               src={icd}
        alt="Integrated Chip Design"
        className="absolute inset-0 w-full h-full object-cover -z-10 scale-105 transform transition-transform duration-1000 hover:scale-110"
             />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/80 to-blue-900/60 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] -z-10"></div>
               <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-6">
               <div className="flex flex-col h-full justify-center">
          <div className="xl:space-y-8 space-y-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm font-medium">Welcome to Our IC Design Solutions</span>
            </div>
            <div className="space-y-8">
              <h1 className="font-bold text-white text-[35px] lg:text-[65px] 2xl:text-7xl leading-tight lg:leading-[4.25rem] 2xl:leading-[5rem] lg:w-3/5 2xl:w-3/4">
            Advanced Integrated Chip Design Solutions
          </h1>
              <p className="text-white text-sm lg:text-base 2xl:text-xl font-normal max-w-3xl leading-relaxed ">
            Transform your ideas into reality with our Advanced Integrated Chip (IC) Design services. 
            We specialize in providing cutting-edge, customized IC solutions using proven processes, 
            ensuring reliable and high-performance results for your next big project.
          </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 xl:mt-0 mt-6">
              <button className="group relative px-8 xl:py-4 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer" onClick={() => navigate('/contactPage')}></div>
              </button>
              <button className="group px-8 xl:py-4 py-2 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"  onClick={() => navigate('/servicesPage')}>
                Explore Services
              </button>
            </div>
            <div className="flex flex-wrap items-center xl:gap-8 gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">Global Reach</span>
              </div>
            </div>
        </div>
    </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent -z-10"></div> */}
      </div>

      {/* What We Offer Section */}
      <div className="py-16 bg-white mt-10 mx-auto max-w-screen-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center font-inter">Our Integrated Chip Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
            {/* Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-t-amber-400 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Tailored IC Architectures</h3>
              <p className="text-gray-600">
                Specialized designs for both analog and digital ICs, as well as mixed-signal solutions, 
                tailored to your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-t-green-400 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">End-to-End Design Services</h3>
              <p className="text-gray-600">
                Full support throughout the design cycle, from initial concept to final tape-out, 
                including RTL design, verification, DFT, and physical implementation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-t-blue-400 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Expertise Across Technologies</h3>
              <p className="text-gray-600">
                In-depth knowledge in various fabrication processes, including CMOS, FinFET, 
                and SOI technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-t-pink-400 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Reliability-Driven Designs</h3>
              <p className="text-gray-600">
                Focused on delivering designs that meet the highest standards of reliability, 
                performance, and manufacturability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-t-cyan-400 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Power-Efficient Designs</h3>
              <p className="text-gray-600">
                We optimize for low-power consumption without compromising performance, 
                ideal for mobile and battery-operated devices.
              </p>
            </div>

            <div className="bg-blue-800 flex flex-col justify-center items-center p-6 rounded-lg shadow-lg  border-gray-200 hover:shadow-xl transition-shadow">
              <div className='text-white font-semibold text-xl cursor-pointer'  onClick={() => navigate('/servicesPage')}>
                Explore Services
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 mx-auto max-w-screen-xl font-inter mt-20 mb-40 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">
                Our team has successfully delivered complex IC projects across multiple industries, 
                from automotive to consumer electronics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Scalable IP Blocks</h3>
              <p className="text-gray-600">
                We provide reusable, custom IP blocks that accelerate your product's development cycle.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Leading Tools & Methodologies</h3>
              <p className="text-gray-600">
                Leveraging industry-standard tools such as Cadence, Synopsys, and Mentor Graphics, 
                we ensure the highest quality in every design.
              </p>
            </div>
          </div>
        </div>
      </div>


      

      {/* CTA Section */}
      <div className="relative py-24 mt-20 -mb-80 font-inter overflow-hidden">
        <img
          src={contact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10 scale-105 transform transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/55 via-blue-700/20 to-black/10 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] -z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-blue-200 text-sm font-medium">Let's Build Something Amazing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Start Your IC Design Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our expertise can help bring your ideas to life.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Contact Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>
              <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
          </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent -z-10"></div> */}
      </div>
    </div>
  );
};

export default IntegratedChipDesign; 