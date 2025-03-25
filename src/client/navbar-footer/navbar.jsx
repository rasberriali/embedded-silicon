import React, { useState, useRef, useEffect} from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import embedded from "../../assets/images/embedded-logo.svg";
import dropdown from "../../assets/images/dropdown.svg";
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mega-menu-container')) {
        setIsAboutOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  const activeClass = "text-[#2D7BFD] font-semibold";
  const normalClass = "text-[#162447] hover:text-[#2D7BFD] transition-colors";

  return (
    <div className=" sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-300">
        <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3 2xl:py-4 2xl:p-0 p-6'>
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}> 
            <img src={embedded} alt="logo" className='h-12 w-12 md:h-16 md:w-16'/>
            <div className='text-[#2D7BFD] text-xl md:text-xl font-semibold leading-5'>embedded<br/> silicon</div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <div className={`absolute md:static top-16 left-0 w-full md:w-auto overflow-y-scroll xl:overflow-y-hidden max-h-[500px] md:flex md:items-center md:gap-10 md:text-base text-lg font-medium shadow-md md:shadow-none transition-transform duration-300 bg-white md:bg-transparent ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            <div className='md:flex md:gap-10 text-center md:text-left text-base'>
              <div className={`cursor-pointer py-3 md:py-0 ${isActivePage('/') ? activeClass : normalClass}`} onClick={() => navigate('/')}>Home</div>
              
              {/* About Us Dropdown */}
              <div 
                className="mega-menu-container"
                onMouseEnter={() => window.innerWidth >= 768 && setIsAboutOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setIsAboutOpen(false)}
              >
                <div className='relative py-3 md:py-0 group nav-dropdown'>
                  <div 
                    className={`cursor-pointer flex flex-row gap-2 justify-center items-center ${location.pathname.includes('/aboutPage') ? activeClass : normalClass}`}
                    onClick={() => window.innerWidth < 768 && setIsAboutOpen(!isAboutOpen)}
                  >
                    <span>About us</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* About Us Mega Menu */}
                {isAboutOpen && (
                  <div className="mega-menu absolute left-0 w-full bg-white mt-4 shadow-lg border-t border-gray-200 z-[90]">
                    <div className="container max-w-screen-xl mx-auto py-8">
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6'>
                        <div>
                          <h3 className='font-semibold text-[#162447] mb-4 text-lg'>Company Overview</h3>
                          <ul className="space-y-3">
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/aboutPage')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Leadership Team
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/aboutPage#recognitions')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Industry Recognitions
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/aboutPage#partnerships')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Partnerships
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/aboutPage#clients')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Clients
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className='font-semibold text-[#162447] mb-4 text-lg'>Why Us</h3>
                          <div className='bg-gray-50 p-6 rounded-lg'>
                            <p className='text-[#162447] text-sm mb-4'>
                              Embedded Silicon is a global software solutions and engineering services company that helps world's leading organizations turn challenges into lasting business value.
                            </p>
                            <div className='cursor-pointer text-[#2D7BFD] hover:text-blue-700 transition-colors text-sm font-medium' onClick={() => navigate('/aboutPage#story')}>
                              Learn more →
                            </div>
                          </div>
                        </div>
                        <div className='hidden md:block'>
                          <div className='w-full h-64'>
                            <div className='relative w-full h-full overflow-hidden rounded-lg'>
                              <img 
                                src="https://placehold.co/400x300/2D7BFD/FFF" 
                                alt="About Embedded Silicon" 
                                className='w-full h-full object-cover'
                              />
                              <div className='absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent'>
                                <h4 className='text-white font-semibold mb-1'>AWS Financial Services</h4>
                                <p className='text-gray-300 text-sm'>Embedded Silicon achieves AWS competency</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="mega-menu-container"
                onMouseEnter={() => window.innerWidth >= 768 && setIsServicesOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setIsServicesOpen(false)}
              >
                <div className='relative py-3 md:py-0 group nav-dropdown'>
                  <div 
                    className={`cursor-pointer flex flex-row gap-2 justify-center items-center ${location.pathname.includes('/servicesPage') ? activeClass : normalClass}`}
                    onClick={() => window.innerWidth < 768 && setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Services Mega Menu */}
                {isServicesOpen && (
                  <div className="mega-menu absolute left-0 w-full bg-white xl:mt-4 mt-0  shadow-lg border-t border-gray-200 z-[90]">
                    <div className="container max-w-screen-xl mx-auto py-8">
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6'>
                        <div>
                          <h3 className='font-semibold text-[#162447] mb-4 text-lg'>IC Design Services</h3>
                          <ul className="space-y-3">
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#asic')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                ASIC Design
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#verification')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                ASIC Verification
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#physical')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Physical Design
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#fpga')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                FPGA Development
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className='font-semibold text-[#162447] mb-4 text-lg'>Embedded Systems</h3>
                          <ul className="space-y-3">
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#firmware')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Firmware Development
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#hardware')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Hardware Design
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#testing')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Testing & Validation
                              </div>
                            </li>
                            <li>
                              <div className='cursor-pointer text-[#162447] hover:text-[#2D7BFD] transition-colors flex items-center' onClick={() => navigate('/servicesPage#consulting')}>
                                <div className="w-2 h-2 bg-[#FF5C00] mr-2 rounded-full"></div>
                                Technical Consulting
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`cursor-pointer py-3 md:py-0 ${isActivePage('/careersPage') ? activeClass : normalClass}`} onClick={() => navigate('/careersPage')}>Careers</div>
              <div className={`cursor-pointer py-3 md:py-0 ${isActivePage('/success-stories') ? activeClass : normalClass}`} onClick={() => navigate('/success-stories')}>Success stories</div>
              <div className={`cursor-pointer py-3 md:py-0 xl:hidden ${isActivePage('/contactPage') ? activeClass : normalClass}`} onClick={() => navigate('/contactPage')}>Contact</div>
            </div>
          </div>

          <div className='hidden md:flex'>
            <div className={`bg-[#2E7CFD] hover:bg-blue-600 text-[#FFFFFF] py-2 px-6 rounded-lg cursor-pointer ${isActivePage('/contactPage') ? 'ring-2 ring-blue-300' : ''}`} onClick={() => navigate('/contactPage')}>Contact</div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
