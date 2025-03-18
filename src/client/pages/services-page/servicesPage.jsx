import React from 'react'
import servicesbg3 from "../../../assets/images/services-bg-3.jpg"
import dot from "../../../assets/images/dotgrid.svg"
import icon3 from "../../../assets/images/icon3.svg"
import arrow from "../../../assets/images/arrow-blue.svg"
import iconservices1 from "../../../assets/images/icon-services1.svg"
import iconservices2 from "../../../assets/images/icon-services2.svg"


function ServicesPage() {
  return (
    <div>
    <div className="relative font-inter">
    <div className="w-full xl:h-[60vh] h-[30vh] bg-gradient-to-tl from-[#000] via-[#2D7BFD] to-[#000]">
      {/* <img src={servicesbg3} alt="" className="w-full h-full object-cover" /> */}
        <img src={dot} alt="" className="absolute top-0 left-0 xl:w-80 xl:h-80 w-40 h-40 opacity-5" />
        <img src={dot} alt="" className="absolute bottom-0  right-0 xl:w-80 xl:h-80 w-40 h-40  opacity-8" />
       
      
    </div>
    <div className='absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10 '>
      <div className='flex flex-col h-full justify-center'>
      <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-17 2xl:leading-28 lg:w-1/2 2xl:w-3/4 ">
         Emebedded Silicon Tech Expertise
        
        <div className="text-white text-lg lg:text-xl 2xl:text-2xl  font-normal xl:mt-8 mt-6">
          We specialize in crafting tailored solutions that drive efficiency and accelerate growth.
        </div>
        </div>
      </div>
     
    </div>

   

  </div>
  <div className='flex flex-row w-full justify-between max-w-screen-xl mx-auto mt-16 font-inter'>
    <div className='grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-2 grid-rows-1 gap-8 xl:p-0 p-8'>

    <div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices1} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>

  
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>




<div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices2} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>

<div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices1} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>

<div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices2} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>


<div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices1} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>


<div className="flex flex-col p-6 gap-6 relative">
  <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
  <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

    <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
  </div>

  <div className="flex flex-row gap-6">
    <div className="w-1/6 rounded-sm flex  ">
      <img src={iconservices2} alt="" className='' />
    </div>
    <div className="w-full text-xl font-semibold">
      Application - Specific IC<br/> Verification
    </div>
  </div>
  <div className=' flex flex-col gap-4'>
  <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
  <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
</div>
</div>






    </div>

    </div>
  </div>
  

  
  
  )
}

export default ServicesPage
