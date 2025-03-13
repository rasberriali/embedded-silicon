import React from 'react'
import embedded from "../../assets/images/embedded-logo.svg"
import dropdown from "../../assets/images/dropdown.svg"

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center border-b-[0.1px] border-gray-200 '>
        <div className='flex flex-row lg:mx-40 2xl:mx-80 w-full justify-between gap-4 py-1  '>
        <div className='flex flex-row  items-center  w-1/3  gap-2 cursor-pointer '>
            <img src={embedded} alt="logo" className='h-20 w-20'/>
            <div className='text-[#2D7BFD] text-3xl font-semibold'>
                Embedded Silicon </div>
           
        </div>
        <div className='flex flex-row w-1/2 justify-center items-center text-base gap-10 font-medium  bg-white '>
            <div className='cursor-pointer '>Home</div>
            <div className='flex items-center gap-2 cursor-pointer '>About us 
              <span className='cursor-pointer '><img src={dropdown} alt="dropdownIcon" className='h-3 w-3 mt-1'></img></span>
            </div>

            <div className='flex items-center gap-2 cursor-pointer '>Services
              <span className='cursor-pointer '><img src={dropdown} alt="dropdownIcon" className='h-3 w-3 mt-1'></img></span>
            </div>
            <div className='cursor-pointer '>Careers</div>
        </div>
        <div className='flex flex-row w-1/6  justify-center items-center font-medium '>
            <div className='bg-[#EDEEF0] py-2 px-8 rounded-full '>Contact</div>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar
