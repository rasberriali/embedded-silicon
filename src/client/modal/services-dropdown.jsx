import React from 'react'
import dropdownimage from "../../assets/images/dropdown-img.svg"
import leadership from "../../assets/images/leadership.png"
import handshake from "../../assets/images/handshake.png"
import reward from "../../assets/images/reward.png"
import costumer from "../../assets/images/costumer.png"
import triangle from "../../assets/images/triangle.svg"
import { useNavigate } from 'react-router-dom';

function ServicesDropdown() {
  const navigate = useNavigate();
  return (
    <div className='relative max-w-screen-full text-sm mx-auto px-8  2xl:p-0 font-inter bg-white  shadow-2xl shadow-gray-950 mt-2'>
      <img 
  src={triangle} 
  alt="" 
  className="absolute top-[-12px] left-1/2 -translate-x-1/2 z-50 h-3  hidden md:block"
/>

    <div className='flex xl:flex-row flex-col p-6 max-w-screen-xl mx-auto '>

      <div className='flex flex-col xl:w-1/2 gap-2 mb-8 '>
      <h1 className='font-bold  cursor-pointer' onClick={() => navigate('/servicesPage')}>
      COMPANY OVERVIEW
      </h1>
<div className='xl:ml-12 ml-6 xl:space-y-2 space-y-0  px-4 xl:mt-2 mt-4 '>
      <div className="flex flex-row rounded-lg hover:bg-[#A4D5FF] cursor-pointer p-2">
        <div className='w-1/6  flex flex-col justify-center items-center'><img src={leadership} alt="" className='w-6'/></div>
        
        <div className='w-full '> Leadership Overview</div>
       
      </div>
      
      <div className="flex flex-row   rounded-lg hover:bg-[#A4D5FF] cursor-pointer p-2">
        <div className='w-1/6  flex flex-col justify-center items-center'><img src={reward} alt="" className='w-6'/></div>
        
        <div className='w-full '> Industry Recognitions</div>
       
      </div>
      
      <div className="flex flex-row  rounded-lg hover:bg-[#A4D5FF] cursor-pointer p-2">
        <div className='w-1/6  flex flex-col justify-center items-center'><img src={handshake} alt="" className='w-6'/></div>
        
        <div className='w-full '> Partnerships</div>
       
      </div>
      
      <div className="flex flex-row  rounded-lg hover:bg-[#A4D5FF] cursor-pointer p-2">
        <div className='w-1/6  flex flex-col justify-center items-center'><img src={costumer} alt="" className='w-6'/></div>
        
        <div className='w-full '> Clients</div>
       
      </div>
      </div>
      <h1 className='font-bold  cursor-pointer'>
      NEWS
      </h1>
      <h1 className='font-bold  cursor-pointer'>
      EVENTS
      </h1>
      </div>


      <div className='flex flex-col xl:w-2/5 p-6 gap-4 bg-blue-100 -my-6 xl:text-start text-center '>
    
         <h1 className='font-bold '>
        WHY EMBBEDDED SILICON?
      </h1>
      <p className=' '>
      Proven processes, advanced technologies, and deep expertise 
      ensure reliable project.  Proven processes, advanced 
      technologies, and deep expertise ensure reliable project. 
      </p>
</div>

<div className='flex flex-row xl:full '>
      <div className='flex flex-col xl:p-6 p-4 xl:gap-6 gap-2 bg-blue-100  -my-6 xl:text-start text-center  '>
        <h2 className='font-semibold leading-5   '>Embedded Silicon achieves emerging semiconductor company</h2>
        <img src={dropdownimage} alt="" className='w-full'/>

      </div>
      </div>

    </div>
    </div>
  )
}

export default ServicesDropdown
