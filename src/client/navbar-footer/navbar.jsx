import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import embedded from "../../assets/images/embedded-logo.svg";
import dropdown from "../../assets/images/dropdown.svg";
import { Menu, X } from 'lucide-react';
import ServicesDropdown from '../modal/services-dropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Close both dropdown and hamburger menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className='border-b-[0.1px] border-gray-200 font-inter sticky top-0 z-50 bg-white'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3 2xl:py-4 2xl:p-0 p-6'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}> 
          <img src={embedded} alt="logo" className='h-12 w-12 md:h-16 md:w-16'/>
          <div className='text-[#2D7BFD] text-xl md:text-xl font-semibold leading-5'>embedded<br/> silicon</div>
        </div>

        <button className='md:hidden text-gray-600' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`absolute md:static top-16 left-0 w-full md:w-auto overflow-y-scroll xl:overflow-y-hidden max-h-[500px] bg-white md:flex md:items-center md:gap-10 md:text-base text-lg font-medium shadow-md md:shadow-none transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className='md:flex md:gap-10 text-center md:text-left text-[#162447] text-base'>
            <div className='cursor-pointer py-3 md:py-0' onClick={() => navigate('/')}>Home</div>
            <div className='flex justify-center md:justify-start items-center gap-2 cursor-pointer py-3 md:py-0' onClick={() => navigate('/aboutPage')}>
              About us <img src={dropdown} alt="dropdownIcon" className='h-3 w-3 mt-1' />
            </div>
            <div 
  className='flex flex-col items-center gap-2 cursor-pointer py-3 md:py-0 relative text-start' 
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
>
  <div className="flex items-center gap-2">
    Services 
    <img src={dropdown} alt="dropdownIcon" className={`h-3 w-3 mt-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
  </div>


  <div className={`transition-all duration-300 overflow-y-scroll w-full flex justify-center ${isDropdownOpen ? 'max-h-[800px]' : 'max-h-0'} md:max-h-none`}>
    <div className="md:hidden w-full flex justify-center">
      <ServicesDropdown />
    </div>
  </div>
</div>

            
            <div className='cursor-pointer py-3 md:py-0'>Careers</div>
            <div className='cursor-pointer py-3 md:py-0'>Success stories</div>
            <div className='cursor-pointer py-3 md:py-0 xl:hidden' onClick={() => navigate('/contactPage')}>Contact</div>
          </div>
        </div>

        <div className='hidden md:flex'>
          <div className='bg-[#2E7CFD] hover:bg-blue-600 text-[#FFFFFF] py-2 px-6 rounded-lg cursor-pointer' onClick={() => navigate('/contactPage')}>Contact</div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="hidden md:block absolute w-full left-0 top-16 z-40">
          <ServicesDropdown />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
