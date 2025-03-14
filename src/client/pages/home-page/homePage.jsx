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


function HomePage() {
  const navigate = useNavigate();
  return (
    <div className=''>
    <div className='container mx-auto 2xl:p-0 p-6 font-inter '>
        <div className='container mx-auto flex flex-col md:flex-col xl:flex-row md-flex-row  gap-4 lg:mt-10 2xl:mt-30 '>
             {/* leftside */}
            <div className='flex xl:w-1/2 flex-col gap-10  2xl:justify-start 2xl:items-start  lg:justify-start lg:items-start justify-center items-center' >
              <div className='2xl:text-5xl  text-2xl xl:text-5xl text-center 2xl:text-start  xl:text-start font-bold'>A Full-stack technology development partner</div>
                <p className='text-[#647185] text-[20px]'>
                  A leading Philippine tech firm specializing in IC Design,<br/>
                  embedded systems, rapid prototyping, and ASIC conversion. </p>
                  <p className='text-[#040404] font-semibold text-[20px]'>
                    Trusted for years in providing reliable digital solutions.</p>
                    <hr className='text-gray-200 w-2/3'></hr>
                      <div className='flex flex-row w-3/4 justify-between '>
                      
                       <div className='flex flex-col w-1/2'>
                        <div className='flex flex-row  items-center text-[#1A57C2]  font-bold '>
                          <div className='text-2xl '>200+ </div>
                            <div className='text-xs mt-2 '>yrs</div> </div>
                               <div className='text-[#647185] font-medium text-base'>of years of combined
                                </div>
                                  </div>

                                    <div className='flex flex-col  w-1/2'>
                                      <div className='flex flex-row  items-center text-[#1A57C2]  font-bold '>
                                        <div className='text-2xl '>50+ </div>
                                        <div className='text-xs mt-2 '>yrs</div> </div>
                                          <div className='text-[#647185] font-medium text-base'>engineers and growing
                                            </div>
                                              </div>
                                                  </div>

                                                    <div className='flex flex-row items-center justify-center w-3/5  -mt-4 bg-[#162447] rounded-full text-white text-base'>
                                                      <div className='p-2'>Learn more</div></div>
            </div>
          
                                                      {/* rightside */}
                                                        <div className='w-1/2   '>
                                                          <div className="relative mt-2 ">
                                                            <img src={image1} alt="ic" className="absolute top-0 left-0 2xl:w-[680px]  3xl:h-[350px] md:w-[560px]  md:h-[350px]   object-cover opacity-80 z-10 rounded-lg shadow-black shadow" />
                                                            <img src={image2} alt="ic" className="absolute top-8 left-6  2xl:w-[690px] 3xl:h-[360px] md:w-[570px] md:h-[360px] object-cover opacity-85 z-20 rounded-lg shadow-black " />
                                                            <img src={image3} alt="ic" className="absolute top-16 left-12  2xl:w-[700px]  3xl:h-[370px] md:w-[580px] md:h-[360px]  object-cover opacity-95 z-30 rounded-lg shadow-black shadow-2xl" />
                                                           </div>
                                                        </div>
        
        </div>
                                                      <div className='gap-4 mt-50'>
                                                        <div className='flex flex-col'>
                                                        <h1 className='text-[#040404] text-4xl font-semibold w-3/5'>Your <span className='text-[#1A57C2] font-semibold'>all-in-one</span> IC and embedded <br/>
                                                        solutions expert</h1>
                                                        <p className='mt-8 w-full text-[#647185] text-xl'>We specialize in delivering cutting-edge technology with seamless execution, keeping you involved every step of the way.</p>
                                                        </div>
                                                      </div>

          
                                                      <div className='flex flex-row justify-between gap-4 mt-20'>
                                                          <div className='flex flex-row w-2/5 '>
                                                          <div className='flex flex-col w-1/2  items-center gap-6 py-6'>
                                                          <div className='bg-[#1A57C2] p-6 rounded-full'>
                                                          <img src={Icon1} alt="icons1" className='h-10 w-10'></img>
                                                          </div>
                                                          <div className=''>
                                                            <img src={line} alt="line" className='h-25'/>
                                                          </div>
                                                          <div className='bg-[#1A57C2] p-6 rounded-full'>
                                                          <img src={icon2} alt="icons2" className='h-10 w-10'></img>
                                                          
                                                          </div>
                                                          <div className=''>
                                                            <img src={line} alt="line" className='h-25'/>
                                                          </div>
                                                          <div className='bg-[#1A57C2] p-6 rounded-full'>
                                                          <img src={icon3} alt="icons3" className='h-10 w-10'></img>
                                                          
                                                          </div>
                                                          </div>

                                                          <div className='flex flex-col w-full  gap-32 p-2 py-6'>

                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2 '> Innovative 
                                                            <span className='text-[#647185] text-base font-normal'>
                                                                      We push the boundaries of IC<br/>
                                                                      design and embedded systems<br/>
                                                                      to create forward-thinking solutions.
                                                            </span>
                                                          </div>

                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Fast Delivery 
                                                            <span className='text-[#647185] text-base font-normal'>
                                                            Our agile development approach<br/>
                                                            ensures rapid prototyping and efficient
                                                            execution to meet deadlines.
                                                            </span>
                                                          </div>
                                                          <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Exceeding Market Expectations 
                                                            <span className='text-[#647185] text-base font-normal'>
                                                            We don’t just meet industry standards—we
                                                            surpass them, delivering high-performance, 
                                                            future-ready solutions.
                                                            </span>
                                                          </div>

                                                          </div>


                                                          </div>
                                                          <div className='flex flex-col w-3/5 items-center  mt-5 justify-start '>
                                                              <img src={work} alt="work" className='rounded-3xl'/>
                                                              <div className='flex flex-row w-1/2  justify-between items-center text-white bg-[#1A57C2] h-26 rounded-[20px] -mt-14 opacity-95 shadow-xl'>
                                                                <div className='flex flex-col w-1/2 items-center font-bold text-2xl'>99% <span className='text-sm font-semibold'>Client satisfaction</span></div>
                                                                <div className='flex flex-col w-1/2 items-center font-bold text-2xl'>100++<span className='text-sm font-semibold'>Projects delivered</span></div>
                                                              </div>
                                                          </div>
                                                        </div>

            
                                                        <div className='flex flex-row mt-40 justify-center'>
                                                          <div className='flex flex-col'>
                                                            <div className='text-[#040404] text-[50px] flex flex-col items-center gap-2 font-semibold'>
                                                              Our clients <span className='text-xl text-[#647185] font-normal'>Some of the businesses and startups we have worked with</span>
                                                            </div>
                                                          </div>
                                                        </div>


                                                    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5  grid-rows-2  items-center mt-10 ">
                                                      <div className='justify-center flex'><img src={bosch} alt="" className='h-40 w-48'/></div>
                                                      <div className='justify-center flex'><img src={innovation} alt="" className='h-40 w-48'/></div>
                                                      <div className=' justify-center flex'><img src={credit} alt=""className='h-40 w-48'/></div>
                                                      <div className=' justify-center flex'><img src={ebay} alt=""className='h-40 w-48'/></div>
                                                      <div className='justify-center flex'><img src={total} alt=""className='h-40 w-48'/></div>
                                                      <div className='justify-center flex'><img src={inditex} alt=""className='h-40 w-48'/></div>
                                                      <div className=' justify-center flex'><img src={siemens} alt=""className='h-40 w-48'/></div>
                                                      <div className='justify-center flex'><img src={bosch} alt=""className='h-40 w-48'/></div>
                                                      <div className=' justify-center flex'><img src={ebay} alt=""className='h-40 w-48'/></div>
                                                      <div className=' justify-center flex'><img src={total} alt=""className='h-40 w-48'/></div>
                                                    </div>
    </div>
    <div className="mt-20">
  <div className="flex flex-row bg-gradient-to-b from-[#1D1D1D] via-[#162447] to-[#1D1D1D] font-inter animated-bg">
    <div className="container mx-auto mt-10 mb-10 p-6">
      <div className="p-2 bg-[#2D7BFD] hover:bg-[#0453D8] cursor-pointer px-14 rounded-full w-fit text-white"onClick={() => navigate('/aboutusPage')}>Services</div>
      <div className="w-fit text-5xl font-semibold text-white mt-6">What we do</div>

      {/* Scrollable Container */}
      <div className="relative mt-14">
        <div className="overflow-x-auto scrollbar-custom cursor-pointer">
          <div className="grid grid-flow-col auto-cols-max gap-10 mb-4 cursor-grab">
            {/* Service Card 1 */}
            <div className="border-[#1C18FF] border py-12 px-8 rounded-lg drop-shadow-lg text-white text-xl w-80 ">
              <div className="p-4 bg-white w-14 flex justify-center rounded-lg">
                <img src={small_icons} alt="small" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-bold">Integrated Chip Design</div>
                <div className="font-extralight text-sm">
                  Proven processes, advanced technologies, and deep expertise ensure reliable projects.
                </div>
                <div className="text-xs font-normal flex justify-end gap-1 mt-6 hover:text-gray-400">
                  Learn more <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="border-[#1C18FF] border py-12 px-8 rounded-lg drop-shadow-lg text-white text-xl w-80">
              <div className="p-4 bg-white w-14 flex justify-center rounded-lg">
                <img src={small_icons} alt="small" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-bold">Application-Specific IC Verification</div>
                <div className="font-extralight text-sm">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand.
                </div>
                <div className="text-xs font-normal flex justify-end gap-1">
                  Learn more <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="border-[#1C18FF] border py-12 px-8 rounded-lg drop-shadow-lg text-white text-xl w-80">
              <div className="p-4 bg-white w-14 flex justify-center rounded-lg">
                <img src={small_icons} alt="small" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-bold">Physical Design and Verification</div>
                <div className="font-extralight text-sm">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand.
                </div>
                <div className="text-xs font-normal flex justify-end gap-1">
                  Learn more <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="border-[#1C18FF] border py-12 px-8 rounded-lg drop-shadow-lg text-white text-xl w-80">
              <div className="p-4 bg-white w-14 flex justify-center rounded-lg">
                <img src={small_icons} alt="small" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-bold">FPGA Development</div>
                <div className="font-extralight text-sm">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand.
                </div>
                <div className="text-xs font-normal flex justify-end gap-1 mt-6">
                  Learn more <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="border-[#1C18FF] border py-12 px-8 rounded-lg drop-shadow-lg text-white text-xl w-80">
              <div className="p-4 bg-white w-14 flex justify-center rounded-lg">
                <img src={small_icons} alt="small" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-bold">Custom ASIC Solutions</div>
                <div className="font-extralight text-sm">
                  We provide high-performance ASIC design solutions tailored to your needs.
                </div>
                <div className="text-xs font-normal flex justify-end gap-1 mt-6">
                  Learn more <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
   
    
  )
}

export default HomePage
