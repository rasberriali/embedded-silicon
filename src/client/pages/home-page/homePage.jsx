import React from 'react'
import Navbar from '../../navbar-footer/navbar'

function HomePage() {
  return (
    
        <div className='flex flex-row lg:mx-40 2xl:mx-80 justify-between gap-4 py-1 mt-20 '>
          <div className='flex w-1/2 flex-col  gap-10' >
          <div className='text-5xl font-bold '>A Full-stack technology development partner</div>
          <p className='text-[#647185] text-[20px]'>A leading Philippine tech firm specializing in IC Design,
            embedded systems, rapid prototyping, and ASIC conversion. </p>

            <p className='text-[#040404] font-semibold text-[20px]'>Trusted for years in providing reliable digital solutions.</p>

            <hr className='text-[#CCCCCC]'></hr>

            <div className='flex flex-co text-3xl'>
              <div className='flex flex-col'>
              <div className='flex flex-row items-center text-2xl text-[#1A57C2] font-bold w-1/2'>
                200+ <span className='text-[15px] mt-3 ml-1'>yrs</span>
              </div>
              <div className='text-[15px] text-[#647185] font-medium'>of compined experience</div>

              <div className='flex flex-row items-center text-2xl text-[#1A57C2] font-bold w-1/2'>
                200+ <span className='text-[15px] mt-3 ml-1'>yrs</span>
              </div>
              <div className='text-[15px] text-[#647185] font-medium'>of compined experience</div>

              </div>

            
            </div>
          
          </div>
          
          <div className='flex w-1/2 bg-black'>s</div>
          
          
          

    </div>
  )
}

export default HomePage
