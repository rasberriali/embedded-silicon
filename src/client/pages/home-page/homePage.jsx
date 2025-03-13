import React from 'react'
import Navbar from '../../navbar-footer/navbar'
import image1 from "../../../assets/images/Integrated-circuit.jpg"
import image2 from "../../../assets/images/ic.jpg"
import image3 from "../../../assets/images/icc.webp"
import work from "../../../assets/images/work.png"
import icon1 from "../../../assets/images/icon1.svg"
import icon2 from "../../../assets/images/icon2.svg"
import icon3 from "../../../assets/images/icon3.svg"
import line from "../../../assets/images/Line.svg"


function HomePage() {
  return (
    <div className=''>
        <div className='flex flex-row lg:mx-40 2xl:mx-80 justify-between gap-4 lg:mt-20 2xl:mt-30 '>
          <div className='flex w-1/2 flex-col  gap-10 ' >
          <div className='text-5xl font-bold '>A Full-stack technology development partner</div>
          <p className='text-[#647185] text-[20px]'>A leading Philippine tech firm specializing in IC Design,
            embedded systems, rapid prototyping, and ASIC conversion. </p>
            <p className='text-[#040404] font-semibold text-[20px]'>Trusted for years in providing reliable digital solutions.</p>
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
            <div className='p-2'>Learn more</div>
              
              
            </div>
          </div>
          


          <div className="relative w-1/2 h-64">
            <img src={image1} alt="ic" className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-10 rounded-lg shadow-black shadow" />
            <img src={image2} alt="ic" className="absolute top-10 left-6 w-full h-full object-cover opacity-85 z-20 rounded-lg shadow-black shadow-sm" />
            <img src={image3} alt="ic" className="absolute top-20 left-12 w-full h-full object-cover opacity-95 z-30 rounded-lg shadow-black shadow-2xl" />
          </div>

        
          </div>

          <div className='flex flex-row lg:mx-40 2xl:mx-80 justify-between gap-4 mt-50'>
            <div className='flex flex-col'>
            <h1 className='text-[#040404] text-4xl font-semibold w-3/5'>Your <span className='text-[#1A57C2] font-semibold'>all-in-one</span> IC and embedded
            solutions expert</h1>
            <p className='mt-8 w-full text-[#647185] text-xl'>We specialize in delivering cutting-edge technology with seamless execution, keeping you involved every step of the way.</p>
            </div>

           
          
          </div>

          <div className='flex flex-row lg:mx-40 2xl:mx-80 justify-between gap-4 mt-20'>
              <div className='flex flex-row w-2/5 '>
              <div className='flex flex-col w-1/2  items-center gap-6 py-6'>
              <div className='bg-[#1A57C2] p-6 rounded-full'>
              <img src={icon1} alt="icons1" className='h-10 w-10'></img>
              </div>
              <div className=''>
                <img src={line} alt="line"/>
              </div>
              <div className='bg-[#1A57C2] p-6 rounded-full'>
              <img src={icon2} alt="icons2" className='h-10 w-10'></img>
              
              </div>
              <div className=''>
                <img src={line} alt="line"/>
              </div>
              <div className='bg-[#1A57C2] p-6 rounded-full'>
              <img src={icon3} alt="icons3" className='h-10 w-10'></img>
              
              </div>
              </div>

              <div className='flex flex-col w-full  gap-36 p-2 py-6'>

              <div className='flex flex-col text-[#040404] text-xl font-medium gap-2 '> Innovative 
                <span className='text-[#647185] text-base'>
                          We push the boundaries of IC<br/>
                          design and embedded systems<br/>
                          to create forward-thinking solutions.
                </span>
              </div>

              <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Fast Delivery 
                <span className='text-[#647185] text-base'>
                Our agile development approach<br/>
                ensures rapid prototyping and efficient
                execution to meet deadlines.
                </span>
              </div>
              <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Exceeding Market Expectations 
                <span className='text-[#647185] text-base '>
                We don’t just meet industry standards—we
                surpass them, delivering high-performance, 
                future-ready solutions.
                </span>
              </div>

              </div>


              </div>
              <div className='flex flex-col w-3/5 items-center justify-center '>
              <img src={work} alt="work" className='rounded-3xl'/>

              </div>

            </div>
    </div>
  )
}

export default HomePage
