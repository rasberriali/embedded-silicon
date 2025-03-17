import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import embedded from "../../assets/images/embedded-logo.svg";
import dropdown from "../../assets/images/dropdown.svg";
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='border-b-[0.1px] border-gray-200 font-inter sticky top-0 z-50 bg-white'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3 2xl:py-4 2xl:p-0 p-6  '>
        <div className='flex items-center gap-2 cursor-pointer 'onClick={() => navigate('/')}>
          <img src={embedded} alt="logo" className='h-12 w-12 md:h-16 md:w-16'/>
          <div className='text-[#2D7BFD] text-xl md:text-xl font-semibold font-inter leading-5'>embedded<br/> silicon</div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-gray-600' 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:items-center md:gap-10 md:text-base text-lg font-medium shadow-md md:shadow-none transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className='md:flex md:gap-10 text-center md:text-left text-[#162447] text-base'>
            <div className='cursor-pointer py-3 md:py-0' onClick={() => navigate('/')}>Home</div>
            <div className='flex justify-center md:justify-start items-center gap-2 cursor-pointer py-3 md:py-0'onClick={() => navigate('/aboutusPage')} >
              About us <img src={dropdown} alt="dropdownIcon" className='h-3 w-3 mt-1' />
            </div>
            <div className='flex justify-center md:justify-start items-center gap-2 cursor-pointer py-3 md:py-0'>
              Services <img src={dropdown} alt="dropdownIcon" className='h-3 w-3 mt-1' />
            </div>
            <div className='cursor-pointer py-3 md:py-0'>Careers</div>
            <div className='cursor-pointer py-3 md:py-0'>Sucess stories</div>
          </div>
        </div>

        {/* Contact Button */}
        <div className='hidden md:flex'>
          <div className='bg-[#EDEEF0] py-2 px-6 rounded-full cursor-pointer' onClick={() => navigate('/contactPage')}>Contact</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;