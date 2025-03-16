import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar-footer/navbar'
import image1 from "../../../assets/images/Integrated-circuit.jpg"
import image2 from "../../../assets/images/ic.jpg"
import image3 from "../../../assets/images/icc.webp"
import work from "../../../assets/images/work.png"
import Icon1 from "../../../assets/images/Icon1.svg"
import icon2 from "../../../assets/images/icon2.svg"
import icon3 from "../../../assets/images/icon3.svg"
import line from "../../../assets/images/Line.svg"
import bosch from "../../../assets/images/bosch.png"
import innovation from "../../../assets/images/innovation.png"
import credit from "../../../assets/images/credit.png"
import ebay from "../../../assets/images/ebay.png"
import total from "../../../assets/images/total.png"
import inditex from "../../../assets/images/inditex.png"
import siemens from "../../../assets/images/siemens.png"
import small_icons from "../../../assets/images/small-icons.svg"
import arrow from "../../../assets/images/arrow.svg"
// import icImage from "../../../assets/images/ic-bg.svg"
import icImagee from "../../../assets/images/ic-bgg.svg"
import custom from "../../../assets/images/custom.svg"
import custom1 from "../../../assets/images/custom1.svg"
import analog from "../../../assets/images/analog.svg"
import cpu from "../../../assets/images/cpu.png"
import linebg from "../../../assets/images/linebg.svg"
import backdrop2 from "../../../assets/images/backdrop2.jpg";
import logobackdrop from "../../../assets/images/logobackdrop.svg"




function HomePage() {
  const navigate = useNavigate();
 
  return (
    <div className=''>
    <div className='max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter '>
        <div className=' flex flex-col md:flex-col xl:flex-row md-flex-row  gap-4 lg:mt-10 2xl:mt-20 '>
             {/* leftside */}
            <div className='relative flex xl:w-1/2 flex-col xl:gap-10 gap-6  2xl:justify-start 2xl:items-start  lg:justify-start lg:items-start justify-center items-center' >
            <img src={logobackdrop} alt="" className='absolute inset-0 opacity-85 w-full h-full object-cover -z-10 lg-mt-16 xl:-mt-30'></img>
              <div className='2xl:text-5xl text-3xl md:text-5xl xl:text-5xl text-center 2xl:text-start  xl:text-start font-bold'>A Full-stack technology development partner</div>
                <p className='text-[#4A5565] text-[14px] xl:text-[20px] xl:text-start text-center xl:p-0 p-2'>
                  A leading Philippine tech firm specializing in IC Design,<br/>
                  embedded systems, rapid prototyping, and ASIC conversion. </p>

                  <p className='text-[#040404] font-semibold text-[20px] xl:text-start text-center'>
                    Trusted for years in providing reliable digital solutions.</p>
                    <hr className='text-gray-200 w-2/3'></hr>
                      
                    <div className="flex flex-wrap xl:w-3/4 w-full xl:justify-start justify-center items-center xl:gap-12 gap-6">
                        {/* First Column */}
                        <div className="flex flex-col xl:items-start items-center text-center w-auto">
                          <div className="flex flex-row items-center text-[#1A57C2] font-bold">
                            <div className="xl:text-2xl text-xl">50+</div>
                            <div className="text-xs mt-2">yrs</div>
                          </div>
                          <div className="text-[#647185] font-medium xl:text-base text-sm">engineers and growing</div>
                        </div>

                        {/* Second Column */}
                        <div className="flex flex-col xl:items-start items-center text-center w-auto">
                          <div className="flex flex-row items-center text-[#1A57C2] font-bold">
                            <div className="xl:text-2xl text-xl">50+</div>
                            <div className="text-xs mt-2">yrs</div>
                          </div>
                          <div className="text-[#647185] font-medium xl:text-base text-sm">engineers and growing</div>
                        </div>
                      </div>


                                                    <div className='flex flex-row items-center justify-center w-3/5  xl:-mt-4 mt-4 bg-[#2D7BFD] hover:bg-[#1A57C2] cursor-pointer rounded-full text-white text-base'>
                                                      <div className='p-2 font-medium'>Learn more</div></div>
            </div>
          
                                                      {/* rightside */}
                                                        <div className='w-1/2 animate-floating hidden lg:block '>
                                                          <div className="relative mt-7 ">
                                                            <img src={image1} alt="ic" className="absolute top-0 left-0 2xl:w-[680px]  2xl:h-[350px] md:w-[540px]  md:h-[300px]   object-cover opacity-85 z-10 rounded-lg shadow-black " />
                                                            <img src={image2} alt="ic" className="absolute top-8 left-6  2xl:w-[690px] 2xl:h-[360px] md:w-[550px] md:h-[300px] object-cover opacity-90 z-20 rounded-lg shadow-black " />
                                                            <img src={image3} alt="ic" className="absolute top-16 left-12  2xl:w-[700px]  2xl:h-[370px] md:w-[560px] md:h-[300px]  object-cover opacity-95 z-30 rounded-lg shadow-black " />
                                                           </div>
                                                        </div>
        
                                                          </div>

                                                       
                                                       
                                                       
                                                       
                                                          <div className="gap-4 mt-12 w-full flex flex-col xl:items-start items-center xl:justify-start justify-center text-center xl:text-start">
                                                        <div className="w-full px-3 xl:px-0 mt-20">
                                                          <h1 className="text-[#040404] xl:text-4xl text-xl font-semibold">
                                                            Your <span className="text-[#2D7BFD] font-semibold">all-in-one</span> IC and embedded <br />
                                                            solutions expert
                                                          </h1>
                                                          <p className="mt-8 text-[#647185] xl:text-xl text-base">
                                                            We specialize in delivering cutting-edge technology with seamless execution, keeping you involved every step of the way.
                                                          </p>
                                                        </div>
                                                      </div>


                                                      
          
                                                      <div className='flex xl:flex-row flex-col justify-between gap-4 mt-20'>
                                                        
                                                          <div className='flex flex-row xl:w-2/5 w-full  '>
                                                          <div className='flex flex-col w-1/2  items-center gap-6 py-6'>
                                                          <div className='bg-[#2D7BFD] p-6 rounded-full'>
                                                          <img src={Icon1} alt="icons1" className='h-10 w-10'></img>
                                                          </div>
                                                          <div className=''>
                                                            <img src={line} alt="line" className='h-25'/>
                                                          </div>
                                                          <div className='bg-[#2D7BFD] p-6 rounded-full'>
                                                          <img src={icon2} alt="icons2" className='h-10 w-10'></img>
                                                          
                                                          </div>
                                                          <div className=''>
                                                            <img src={line} alt="line" className='h-25'/>
                                                          </div>
                                                          <div className='bg-[#2D7BFD] p-6 rounded-full'>
                                                          <img src={icon3} alt="icons3" className='h-10 w-10'></img>
                                                          
                                                          </div>
                                                          </div>

                                                          <div className='flex flex-col w-full   gap-32 px-2 xl:py-6 p-6'>

                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2 '> Innovative 
                                                            <span className='text-[#647185] xl:text-base text-sm font-normal'>
                                                                      We push the boundaries of IC<br/>
                                                                      design and embedded systems<br/>
                                                                      to create forward-thinking solutions.
                                                            </span>
                                                          </div>

                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Fast Delivery 
                                                            <span className='text-[#647185] xl:text-base text-sm font-normal'>
                                                            Our agile development approach<br/>
                                                            ensures rapid prototyping and efficient
                                                            execution to meet deadlines.
                                                            </span>
                                                          </div>
                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Exceeding Market Expectations 
                                                            <span className='text-[#647185] xl:text-base text-sm font-normal'>
                                                            We don’t just meet industry standards—we
                                                            surpass them, delivering high-performance, 
                                                            future-ready solutions.
                                                            </span>
                                                          </div>

                                                          </div>
                                                          </div>

                                                          
                                                          <div className='flex flex-col w-full sm:w-3/5 items-center mt-5 justify-start'>
                                                        {/* Work Image */}
                                                        <img src={work} alt="work" className='rounded-3xl w-full' />

                                                        {/* Stats Container */}
                                                        <div className='flex flex-row w-4/5 sm:w-3/5 justify-between items-center text-white bg-[#2D7BFD] h-auto xl:p-8 p-6 rounded-[20px] -mt-14 opacity-95 shadow-xl text-center'>
                                                          <div className='flex flex-col w-full sm:w-1/2 items-center font-bold text-2xl'>
                                                            99% <span className='text-sm font-semibold'>Client satisfaction</span>
                                                          </div>
                                                          <div className='flex flex-col w-full sm:w-1/2 items-center font-bold text-2xl '>
                                                            100++ <span className='text-sm font-semibold'>Projects delivered</span>
                                                          </div>
                                                        </div>
                                                        </div>
                                                        </div>


                                                        

                                                        {/* Our Clients */}

            
                                                        <div className='flex flex-row mt-40 justify-center'>
                                                          <div className='flex flex-col'>
                                                            <div className='text-[#040404] text-[50px] flex flex-col items-center gap-2 font-semibold'>
                                                              Our clients <span className='text-xl text-[#647185] font-normal'>Some of the businesses and startups we have worked with</span>
                                                            </div>
                                                          </div>
                                                        </div>


                                                    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5  grid-rows-2  items-center mt-10 ">
                                                      <div className='justify-center flex'><img src={bosch} alt="" className=''/></div>
                                                      <div className='justify-center flex'><img src={innovation} alt="" className=''/></div>
                                                      <div className=' justify-center flex'><img src={credit} alt=""className=''/></div>
                                                      <div className=' justify-center flex'><img src={ebay} alt=""className=''/></div>
                                                      <div className='justify-center flex'><img src={total} alt=""className=''/></div>
                                                      <div className='justify-center flex'><img src={inditex} alt=""className=''/></div>
                                                      <div className=' justify-center flex'><img src={siemens} alt=""className=''/></div>
                                                      <div className='justify-center flex'><img src={bosch} alt=""className=''/></div>
                                                      <div className=' justify-center flex'><img src={ebay} alt=""className=''/></div>
                                                      <div className=' justify-center flex'><img src={total} alt=""className=''/></div>
                                                    </div>
    </div>
    <div className="mt-20 font-inter ">
  <div className="flex flex-row relative animated-bg">
    <img 
        src={backdrop2}
        alt="Footer Background" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-5"
      />
    <div className="container mx-auto mt-10 mb-10 p-6">
      <div className="xl:p-2 p-1  ring-1 ring-[#2D7BFD] hover:bg-blue-600 cursor-pointer xl:px-14 px-8 rounded-full w-fit text-white z-10 absolute "onClick={() => navigate('/aboutusPage')}>Services</div>
      <div className="w-fit xl:text-5xl text-4xl font-semibold text-white mt-18">What we do</div>

      {/* Scrollable Container */}
      <div className="relative mt-10">
  <div className="overflow-x-auto scrollbar-custom cursor-pointer mb-5">
    <div className="grid grid-flow-col auto-cols-max gap-6 py-6 mb-6 cursor-grab ">
      
      {/* Service Cards */}
      {[
        { title: "Integrated Chip Design", desc: "Proven processes, advanced technologies, and deep expertise ensure reliable projects.", icon: cpu },
        { title: "Application-Specific IC Verification", desc: "From concept to launch, we create stunning, user-centric websites that elevate your brand.", icon: analog },
        { title: "Physical Design and Verification", desc: "From concept to launch, we create stunning, user-centric websites that elevate your brand.", icon: custom },
        { title: "FPGA Development", desc: "From concept to launch, we create stunning, user-centric websites that elevate your brand.", icon: analog },
        { title: "Custom ASIC Solutions", desc: "We provide high-performance ASIC design solutions tailored to your needs.", icon: custom }
      ].map((service, index) => (
        <div 
          key={index} 
          className="group border-[#2D7BFD] border py-6 px-8 rounded-2xl shadow-lg text-white text-xl w-72 bg-gray-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-4 flex flex-col justify-between"
        >
          <div className="p-3 bg-white w-16 flex justify-center rounded-xl shadow-md">
            <img src={service.icon} alt="icon" className="w-10 h-10" />
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="font-bold text-lg">{service.title}</div>
            <div className="font-light text-sm text-gray-300">
              {service.desc}
            </div>
            <div className="text-xs font-normal flex justify-end gap-1 mt-4 text-blue-400 hover:text-blue-300 transition-all cursor-pointer">
              Learn more <img src={arrow} alt="arrow" className="w-4" />
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>
</div>
</div>
</div>

{/* Latest New */}

<div className="max-w-screen-xl mx-auto p-6 mt-20 font-inter">
  <h2 className="flex flex-col text-[50px]  font-semibold text-center mb-12 gap-2">
    Latest News 
    <span className="text-xl text-[#647185] font-normal">
      Some of the businesses and startups we have worked with
    </span>
  </h2>

  {/* News Grid */}
  <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 border-[#2D7BFD] border-1">
  <div className="xl:col-span-2 xl:row-span-1 relative border-[#2D7BFD] border overflow-hidden">
  <div className="w-full h-full relative">
    <img
      src={icImagee}
      alt="Featured News"
      className="w-full h-full object-cover opacity-95 transition-transform duration-1000 ease-in-out hover:scale-120  hover:blur-sm"
    />
  </div>
</div>



  {/* Small Card (Top Right) */}
  <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[300px] w-full flex flex-col justify-between">
    <h3 className="text-2xl font-bold">
      Optimizing costs with data migration to the cloud for a leading stock photography platform
      <span>
        <p className="text-xs text-gray-500 font-medium mt-4">AI & ML • 15 March 2025</p>
      </span>
    </h3>
    <button className="mt-4 bg-gradient-to-r from-[#5c720d] to-[#b9eb08] text-xs text-white px-4 py-1 w-fit">
      Read More
    </button>
  </div>

  {/* Additional News Cards */}
  <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[300px] w-full flex flex-col justify-between">
    <h3 className="text-xl font-bold">
      From concept to launch, we create stunning, user-centric websites that elevate your brand 
      <span>
        <p className="text-xs text-gray-500 font-medium mt-4">Web Development • 18 March 2025</p>
      </span>
    </h3>
    <button className="mt-4 bg-gradient-to-r from-[#1C18FF] to-[#2915ac] text-xs text-white px-4 py-1 w-fit">
      Read More
    </button>
  </div>

  <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[300px] w-full flex flex-col justify-between">
    <h3 className="text-xl font-bold">
      From concept to launch, we create stunning, user-centric websites that elevate your brand 
      <span>
        <p className="text-xs text-gray-500 font-medium mt-4">IoT • 21 March 2025</p>
      </span>
    </h3>
    <button className="mt-4 bg-gradient-to-r from-[#03ce46] to-[#026830] text-xs text-white px-4 py-1 w-fit">
      Read More
    </button>
  </div>

  <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[300px] w-full flex flex-col justify-between">
    <h3 className="text-xl font-bold">
      From concept to launch, we create stunning, user-centric websites that elevate your brand 
      <span>
        <p className="text-xs text-gray-500 font-medium mt-4">Security • 25 March 2025</p>
      </span>
    </h3>
    <button className="mt-4 bg-gradient-to-r from-[#e7045b] to-[#5e0066] text-xs text-white px-4 py-1 w-fit">
      Read More
    </button>
  </div>

</div>

</div>
</div>
   
    
  )
}

export default HomePage
