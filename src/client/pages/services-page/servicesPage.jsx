import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
          
          <div className="text-white text-sm lg:text-xl 2xl:text-2xl  font-normal xl:mt-8 mt-6">
            We specialize in crafting tailored solutions that drive efficiency and accelerate growth.
          </div>
          </div>
        </div>
      
      </div>
    </div>

    {/* Services */}
    <div className='w-full xl:text-start text-center bg-gray-100 mt-20'>
    <div className=' max-w-screen-xl mx-auto  text-[#2D7BFD]  p-4  text-3xl font-extrabold font-inter'>
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
            <div className="w-full text-xl font-bold">
            Full VLSI Design
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal '>Experience end-to-end VLSI Design Flow Services encompassing Functional Design, Floor Planning, Place and Route, chip implementation, and project tapeout – all streamlined for optimal efficiency.</div>
          <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end cursor-pointer 'onClick={() => navigate('/fullvlsi')}></img></div>
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
          <div className="w-full text-xl font-bold">
          Full-Chip Integration
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Experience seamless Full Chip Integration with services like Area Estimation, Floor Planning, Power Planning, and Macro Placement.</div>
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
          <div className="w-full text-xl font-bold">
          Standard Cells Development
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Tailor your industry's future with our versatile Standard Cells Development. Customized for sectors like Automotive, Industrial, Consumer Electronics, and more, based on your preferences.</div>
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
          <div className="w-full text-xl font-bold">
          Design Library Creation 
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Optimize your semiconductor projects with our precise Design Library Creation service tailored to your unique needs.</div>
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
          <div className="w-full text-xl font-bold">
          Analog IP Blocks Development
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>For your Mixed Signal Applications, we provide specialized Analog IP Blocks, catering to both individual IP Block requirements and comprehensive Chip Level Integration needs.</div>
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
          <div className="w-full text-xl font-bold">
          Full Custom Layout
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Explore our Full Custom Layout service, covering Standard Cells to Chip Level Integration. Benefit from our extensive experience across tech nodes, ranging from 180nm to 7nm.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>

      
          </div>
          </div>






          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-[#2D7BFD]   p-4 text-3xl font-extrabold font-inter '>
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
            <div className="w-full text-xl font-bold">
            ASIC Functional Verification
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>We conduct a comprehensive process to test and validate application-specific integrated circuits (ASICs), ensuring adherence to specifications and correct functionality. Within this process, our focus on functional verification ensures that the digital logic design aligns precisely with its specifications.</div>
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
          <div className="w-full text-xl font-bold">
          Post-PNR Regression
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Elevate your projects with our Post PNR Service featuring Regression Capability. Streamline and enhance your design process for optimal performance and reliability.</div>
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
          <div className="w-full text-xl font-bold">
          UVM Testbench Developement
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>We specialize in crafting robust and efficient testbenches for thorough verification of your designs, ensuring optimal performance and compliance with specifications.</div>
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
          <div className="w-full text-xl font-bold">
          RTL to Transistor Level Verification
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Proficient in RTL to Transistor Verification, we handle projects seamlessly with logic scales ranging from less than 100,000 up to 7,000,000 Gates and beyond.</div>
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
          <div className="w-full text-xl font-bold">
          Analog Mixed Signal Verification
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>We excel in meticulous testing and validation of complex mixed-signal designs, ensuring precision and reliability throughout the verification process.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>

      
          </div>
          </div>





          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-[#2D7BFD]   p-4 text-3xl font-extrabold font-inter'>
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
            <div className="w-full text-xl font-bold">
            Automated Place and Route
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Efficient automated Place and Route services covering Post-Synthesis to GDSII Clean Database. Expertise in 22nm to 40nm Tech nodes, with proficiency in Timing and Power Closures up to Physical Verification.</div>
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
            <img src={fullcustom} alt="" className='' />
          </div>
          <div className="w-full text-xl font-bold">
          Full Custom Layout Proficiency
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Explore our Full Custom Layout service, covering Standard Cells to Chip Level Integration. Benefit from our extensive experience across tech nodes, ranging from 180nm to 7nm.</div>
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
          <div className="w-full text-xl font-bold">
          Proficiency across Technology<br/> Nodes (180nm to 7nm)
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>We specialize in developing and implementing advanced applications for microsatellites, ensuring precision and reliability for diverse mission requirements.</div>
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
          <div className="w-full text-xl font-bold">
          Tailored Designs <br/>for Varied Industries

          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Specializing in automated test solution design for customer circuit boards, cables, and system assemblies, our team excels in the development and documentation of integrated test tools for seamless incorporation into the manufacturing process.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>
      
          </div>
          </div>




          {/* Services */}
    <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-[#2D7BFD] p-4 text-3xl font-extrabold font-inter'>
   FPGA Development
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
              <img src={fpgatoasic} alt="" className='' />
            </div>
            <div className="w-full text-xl font-bold">
            FPGA to ASIC
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Embark on seamless FPGA to ASIC Development with our specialized services, facilitating a smooth transition from Field-Programmable Gate Array (FPGA) designs to Application-Specific Integrated Circuits (ASICs), optimizing performance and scalability.</div>
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
            <img src={tailord} alt="" className='' />
          </div>
          <div className="w-full text-xl font-bold">
          Test Development Platforms

          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Specializing in automated test solution design for customer circuit boards, cables, and system assemblies, our team excels in the development and documentation of integrated test tools for seamless incorporation into the manufacturing process.</div>
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
          <div className="w-full text-xl font-bold">
          Microsatellites
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>We specialize in developing and implementing advanced applications for microsatellites, ensuring precision and reliability for diverse mission requirements.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>




      
      
          </div>
          </div>

 {/* Services */}
 <div className='w-full bg-gray-100 mt-20 xl:text-start text-center'>
    <div className=' max-w-screen-xl mx-auto  text-[#2D7BFD] p-4 text-3xl font-extrabold font-inter'>
    Embedded Systems Development
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
            <div className="w-full text-xl font-bold">
            Rapid Prototyping
            </div>
          </div>

          
          <div className=' flex flex-col gap-4'>
          <div className='text-[#1E1E1E] text-base font-normal'>Engage our rapid prototyping services encompassing PCB layout, assembly, cable assembly, and comprehensive Design for Manufacturing analysis.</div>
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
          <div className="w-full text-xl font-bold">
          PCB Layout and Design

          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>Delivering extensive technical services in circuit board design, our engineers efficiently interpret design intent and regulatory requirements from customer schematics. We then craft layouts optimized for seamless functional application.</div>
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
          <div className="w-full text-xl font-bold">
          Firmware Development
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
        <div className='text-[#1E1E1E] text-base font-normal'>We specialize in crafting robust and efficient firmware solutions, ensuring optimal performance and seamless integration with your hardware.</div>
        <div className='flex flex-row justify-end items-end px-4  '> <img src={arrow} alt="" className='h-6 text-end '></img></div>
      </div>
      </div>




      
      
          </div>
          </div>

          
  </div>
  )
}

export default ServicesPage
