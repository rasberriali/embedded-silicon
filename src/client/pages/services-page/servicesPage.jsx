import {useEffect} from 'react'
import servicesbg3 from "../../../assets/images/services-bg-3.jpg"
import dot from "../../../assets/images/dotgrid.svg"
import icon3 from "../../../assets/images/icon3.svg"
import arrow from "../../../assets/images/arrow-blue.svg"
import iconservices1 from "../../../assets/images/icon-services1.svg"
import asic from "../../../assets/images/asic.svg"
import post from "../../../assets/images/post.svg"
import standard from "../../../assets/images/standard.svg"
import fullchip from "../../../assets/images/fullchip.svg"

import fullvlsi from "../../../assets/images/fullvlsi.svg"
import designlibrary from "../../../assets/images/designlibrary.svg"
import analog from "../../../assets/images/analog.svg"
import fullcustom from "../../../assets/images/fullcustom.svg"
import uvm from "../../../assets/images/uvm.svg"
import rtl from "../../../assets/images/rtl.svg"
import analogmixed from "../../../assets/images/analogmixed.svg"
import pnr from "../../../assets/images/pnr.svg"
import fpgatoasic from "../../../assets/images/fpgatoasic.svg"
import microsat from "../../../assets/images/microsat.svg"
import pcb from "../../../assets/images/pcb.svg"
import rapid from "../../../assets/images/rapid.svg"
import firmware from "../../../assets/images/firmware.svg"
import tailord from "../../../assets/images/tailord.svg"


function ServicesPage() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <div className="relative font-inter">
      <div className="w-full xl:h-[80vh] h-[30vh] bg-gradient-to-tl from-[#000] via-[#2D7BFD] to-[#000]">
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

    {/* Services */}
    <div className='w-full xl:text-start text-center bg-gray-100 mt-20'>
    <div className=' max-w-screen-xl mx-auto  text-black  p-4  text-3xl font-bold font-inter'>
      Integrated Chip Design
    </div>
  </div>
  <div className='flex flex-col w-full justify-between max-w-screen-xl mx-auto mt-16 font-inter'>
 

    <div className='grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-2 grid-rows-1 gap-8 xl:p-0 p-8'>

        <div className="flex flex-col p-6 gap-6 relative ">
          <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
          <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

            <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-1/6 rounded-sm flex  ">
              <img src={fullvlsi} alt="" className='' />
            </div>
            <div className="w-full text-xl font-semibold ">
            Full VLSI Design
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal '>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
          <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
        </div>
      </div>




      <div className="flex flex-col p-6 gap-6 relative ">
        <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
        <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

          <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-1/6 rounded-sm flex  ">
            <img src={fullchip} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Full-Chip Integration
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
            <img src={standard} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Standard Cells Development
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
            <img src={designlibrary} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Design Library Creation 
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
            <img src={analog} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Analog IP Blocks Development
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
            <img src={fullcustom} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Full Custom Layout
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>

      
          </div>
          </div>






          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-black  p-4 text-3xl font-bold font-inter '>
    Application-Specific IC Verification

    </div>
  </div>
  <div className='flex flex-col w-full justify-between max-w-screen-xl mx-auto mt-16 font-inter'>
 

    <div className='grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-2 grid-rows-1 gap-8 xl:p-0 p-8'>

        <div className="flex flex-col p-6 gap-6 relative ">
          <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
          <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

            <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-1/6 rounded-sm flex  ">
              <img src={asic} alt="" className='' />
            </div>
            <div className="w-full text-xl font-semibold">
            ASIC Functional Verification
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
          <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
        </div>
      </div>




      <div className="flex flex-col p-6 gap-6 relative ">
        <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
        <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

          <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-1/6 rounded-sm flex  ">
            <img src={post} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Post-PNR Regression
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
            <img src={uvm} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          UVM Testbench Developement
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
            <img src={rtl} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          RTL to Transistor Level Verification
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
            <img src={analogmixed} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Analog Mixed Signal Verification
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>

      
          </div>
          </div>





          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-black  p-4 text-3xl font-bold font-inter'>
    Physical Design and Verification
    </div>
  </div>
  <div className='flex flex-col w-full justify-between max-w-screen-xl mx-auto mt-16 font-inter'>
 

    <div className='grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-2 grid-rows-1 gap-8 xl:p-0 p-8'>

        <div className="flex flex-col p-6 gap-6 relative ">
          <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
          <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

            <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-1/6 rounded-sm flex  ">
              <img src={pnr} alt="" className='' />
            </div>
            <div className="w-full text-xl font-semibold">
            Automated Place and Route
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
          <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
        </div>
      </div>




      <div className="flex flex-col p-6 gap-6 relative ">
        <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
        <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

          <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-1/6 rounded-sm flex  ">
            <img src={fpgatoasic} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Full Custom Layout Proficiency
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
            <img src={microsat} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Proficiency across Technology<br/> Nodes (180nm to 7nm)
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
            <img src={tailord} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Tailored Designs <br/>for Varied Industries

          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>
      
          </div>
          </div>




          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-black  p-4 text-3xl font-bold font-inter'>
    Custom ASIC Solutions
    </div>
  </div>
  <div className='flex flex-col w-full justify-between max-w-screen-xl mx-auto mt-16 font-inter'>
 

    <div className='grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-1 grid-rows-1 gap-8 xl:p-0 p-8'>

        <div className="flex flex-col p-6 gap-6 relative ">
          <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
          <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

            <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-1/6 rounded-sm flex  ">
              <img src={rapid} alt="" className='' />
            </div>
            <div className="w-full text-xl font-semibold">
            Rapid Prototyping
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Proven processes, advanced technologies, and deep expertise ensure reliable project.</div>
          <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
        </div>
      </div>




      <div className="flex flex-col p-6 gap-6 relative ">
        <div className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-gray-300 opacity-70"></div>
        <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300  opacity-80">

          <span className='absolute top-4 right-0 h-[40%] w-[1px] bg-gray-900  opacity-80'></span>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-1/6 rounded-sm flex  ">
            <img src={pcb} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          PCB Layout and Design

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
            <img src={firmware} alt="" className='' />
          </div>
          <div className="w-full text-xl font-semibold">
          Firmware Development
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
