import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from "../../../assets/images/Integrated-circuit.jpg"
import image2 from "../../../assets/images/ic.jpg"
import image3 from "../../../assets/images/icc.webp"
import work from "../../../assets/images/work.png"
import Icon1 from "../../../assets/images/Icon1.svg"
import icon2 from "../../../assets/images/icon2.svg"
import icon3 from "../../../assets/images/icon3.svg"
import line from "../../../assets/images/Line.svg"
import arrow from "../../../assets/images/arrow.svg"
import backdrop2 from "../../../assets/images/backdrop2.jpg";
import logobackdrop from "../../../assets/images/logobackdrop.svg"
import backdropimage from "../../../assets/images/backdropimage.png"
import backdropimage2 from "../../../assets/images/backdropimage2.svg"
import { GoArrowRight } from "react-icons/go";
import fullvlsi from "../../../assets/images/fullvlsi.svg"
import post from "../../../assets/images/post.svg"
import pnr from "../../../assets/images/pnr.svg"
import microsat from "../../../assets/images/microsat.svg"
import pcb from "../../../assets/images/pcb.svg"
import bg from "../../../assets/images/bg.svg"
import MarqueeAnimation from '../../modal/marqueeAnimation';



function HomePage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
   
    return (
      <div>
        <div className=''>
          <div className='max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter'>
            <div className=' flex flex-col md:flex-col xl:flex-row md-flex-row  gap-4 lg:mt-10 2xl:mt-20 '>
               {/* leftside */}
              <div className='relative flex xl:w-1/2 flex-col xl:gap-10 gap-6  2xl:justify-start 2xl:items-start  lg:justify-start lg:items-start justify-center items-center' >
              <img src={logobackdrop} alt="" className='absolute inset-0 opacity-85 w-full h-full object-cover -z-10 lg-mt-16 xl:-mt-30 '></img>
                <div className='2xl:text-5xl text-3xl md:text-5xl xl:text-5xl text-center 2xl:text-start  xl:text-start font-bold'>A Full-stack technology development partner</div>
                  <p className='text-[#4A5565] text-[14px] xl:text-[20px] xl:text-start text-center xl:p-0 p-2'>
                    A leading Philippine tech firm specializing in IC Design,<br/>
                    embedded systems, rapid prototyping, and ASIC conversion. </p>

                    <p className='text-[#040404] font-semibold text-[20px] xl:text-start text-center'>
                      Trusted for years in providing reliable tech solutions.</p>
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


                                                          <div className='flex flex-row items-center justify-center w-3/5  xl:-mt-4 mt-4 bg-[#2D7BFD] hover:bg-[#1A57C2] cursor-pointer rounded-full text-white text-base'onClick={() => navigate('/aboutPage')}>
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
                                                              We don't just meet industry standards—we
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
                                                              99% <span className='xl:text-sm text-xs font-semibold'>Client satisfaction</span>
                                                            </div>
                                                            <div className='flex flex-col w-full sm:w-1/2 items-center font-bold text-2xl '>
                                                              100++ <span className='xl:text-sm text-xs font-semibold'>Projects delivered</span>
                                                            </div>
                                                          </div>
                                                          </div>
                                                          </div>


                                                          </div>                                                  

                                                          {/* Our Clients */}

            
                                                          <div className='flex flex-row xl:mt-30 mt-30 justify-center p-4  '>
                                                            <div className='flex flex-col'>
                                                              <div className='text-black text-[50px] flex flex-col  justify-center items-center gap-2 font-bold '>
                                                                Our clients <span className='text-xl text-[#647185] font-normal text-center'>Some of the businesses and startups we have worked with</span>
                                                              </div>
                                                            </div>
                                                          </div>


                                                          <div className=" max-w-screen-xl mx-auto flex flex-col justify-center items-start  mt-20 overflow-hidden">
                                                           <MarqueeAnimation/>
                                                          </div>
     
                                                          {/* What We Do Section */}
                                                          <div className="xl:mt-40 mt-30 py-16 relative bg-[#050505] overflow-hidden">
                                                            {/* Circuit pattern overlay */}
                                                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,0.393 L59.95,5.716 L38.85,26.816 L45.374,33.34 L56.4,22.314 L54.627,20.541 L58.364,16.804 L47.861,6.301 L51.598,2.564 L49.673,0.639 L41.902,8.41 L40.015,6.525 L36.408,10.132 L39.122,12.846 L37.091,14.877 L39.887,17.673 L37.968,19.591 L40.764,22.387 L38.661,24.49 L40.675,26.504 L47.596,19.583 L54.627,26.614 L59.95,21.291 L54.627,15.968 L59.95,10.645 L54.627,5.322 L59.95,0 L54.627,0.393 L54.627,0.393 Z' fill='%232D7BFD' fill-rule='evenodd'/%3E%3C/svg%3E')" }}></div>
                                                            
                                                            {/* Decorative blurry circles */}
                                                            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2D7BFD]/20 rounded-full blur-[100px]"></div>
                                                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2D7BFD]/20 rounded-full blur-[100px]"></div>
                                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D7BFD]/15 rounded-full blur-[120px]"></div>
                                                            
                                                            {/* Grid pattern overlay */}
                                                            <div className="absolute inset-0 opacity-[0.05]" style={{ 
                                                              backgroundImage: `linear-gradient(to right, #2D7BFD 1px, transparent 1px),
                                                                               linear-gradient(to bottom, #2D7BFD 1px, transparent 1px)`,
                                                              backgroundSize: '40px 40px'
                                                            }}></div>
                                                            
                                                            {/* Content container */}
                                                            <div className="max-w-screen-xl mx-auto px-6 2xl:px-0 relative">
                                                              {/* Section Header */}
                                                              <div className="flex flex-col items-center text-center mb-16">
                                                                <div className="w-24 h-1.5 bg-[#2D7BFD] mb-8"></div>
                                                                <h2 className="text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight">What We Do</h2>
                                                                <p className="text-gray-100 max-w-5xl xl:text-xl text-lg leading-relaxed font-normal">
                                                                  We deliver cutting-edge IC design and embedded solutions that drive innovation in the technology sector
                                                                </p>
                                                              </div>
                                            
                                                              {/* Services Grid */}
                                                              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                                                {[
                                                                  { title: "Integrated Chip Design", desc: "Advanced IC design with proven processes and deep expertise for reliable project delivery.", icon: fullvlsi },
                                                                  { title: "ASIC Verification", desc: "Comprehensive verification ensuring functionality, performance, and reliability of custom chips.", icon: post },
                                                                  { title: "Physical Design", desc: "Optimizing layout and implementing physical constraints for manufacturability and performance.", icon: pnr },
                                                                  { title: "FPGA Development", desc: "Rapid prototyping and hardware implementation using programmable logic solutions.", icon: microsat },
                                                                  { title: "Custom ASIC Solutions", desc: "Tailored chip solutions designed for your specific performance and power requirements.", icon: pcb },
                                                                  { title: "Design Consultancy", desc: "Expert guidance and technical advice throughout your project lifecycle.", icon: fullvlsi }
                                                                ].map((service, index) => (
                                                                  <div 
                                                                    key={index} 
                                                                    className="group bg-[#101010] border-2 border-[#333] rounded-xl shadow-lg hover:shadow-[#2D7BFD]/30 transition-all duration-300 overflow-hidden hover:border-[#2D7BFD]/50"
                                                                    onClick={() => navigate('/servicesPage')}
                                                                  >
                                                                    <div className="border-t-4 border-[#2D7BFD] h-1 w-0 group-hover:w-full transition-all duration-500"></div>
                                                                    <div className="p-8">
                                                                      <div className="flex items-center mb-6">
                                                                        <div className="bg-[#2D7BFD]/20 w-16 h-16 rounded-full flex items-center justify-center mr-5 group-hover:bg-[#2D7BFD]/30 transition-colors duration-300">
                                                                          <img src={service.icon} alt={service.title} className="w-8 h-8 filter brightness-0 invert" />
                                                                        </div>
                                                                        <h3 className="text-white text-xl font-bold tracking-tight font-inter">{service.title}</h3>
                                                                      </div>
                                                                      
                                                                      <p className="text-gray-200 xl:text-base text-sm font-inter font-light leading-relaxed mb-8">{service.desc}</p>
                                                                      
                                                                      <div className="flex items-center text-[#2D7BFD] font-semibold text-sm">
                                                                        <span>Learn more</span>
                                                                        <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                                                          <GoArrowRight className="w-6 h-6" />
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                ))}
                                                              </div>
                                                              
                                                              {/* Call to Action Section */}
                                                              <div className="mt-20 bg-[#0A0A0A] border border-[#333] rounded-xl p-10 shadow-lg">
                                                                <div className="flex flex-col xl:flex-row items-center justify-between">
                                                                  <div className="xl:w-2/3 xl:pr-10">
                                                                    <div className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6">15+ Years of Excellence</div>
                                                                    <h3 className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight">Ready to transform your technology vision?</h3>
                                                                    <p className="text-gray-200 xl:text-xl text-sm mb-10 xl:pr-8 leading-relaxed">
                                                                      Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services.
                                                                    </p>
                                                                    <div className="flex flex-row gap-4">
                                                                      <div 
                                                                        onClick={() => navigate('/contactPage')}
                                                                        className="bg-[#2D7BFD] hover:bg-[#1A57C2] text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full shadow-sm transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
                                                                      >
                                                                        Book a consultation
                                                                      </div>
                                                                      <div 
                                                                        onClick={() => navigate('/servicesPage')}
                                                                        className="border-2 border-[#2D7BFD] text-[#2D7BFD] hover:bg-[#2D7BFD]/10 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
                                                                      >
                                                                        Browse services
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
    </div>

    {/* Latest News Section */}
    <div className="max-w-screen-xl mx-auto xl:mt-40 mt-30 font-inter lg:px-6 2xl:px-0 px-6">
      <h2 className="flex flex-col text-[50px] font-semibold text-center mb-12 gap-2 text-black">
        Latest News
        <span className="text-xl text-[#647185] font-normal">
          Read more about our innovations and discoveries
        </span>
      </h2>

      {/* News Grid */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 border-[#2D7BFD] border-1">
        <div className="xl:col-span-2 xl:row-span-1 relative border-[#2D7BFD] border overflow-hidden">
          <div className="w-full h-full relative group">
            <div className='absolute z-1 xl:text-4xl text-xl xl:w-2/3 font-bold text-white p-6'>Full-stack technology development <br></br>partner</div>
            <img
              src={backdropimage2}
              alt="Featured News"
              className="w-full h-80 object-cover opacity-95 transition-transform duration-1000 ease-in-out hover:scale-120 hover:blur-sm"/>
            <span className="absolute right-6 bottom-6 text-white text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100">
              <GoArrowRight className="w-10 h-14 transition-all duration-500 group-hover:w-20 text-sky-50"/>
            </span>
          </div>
        </div>

        {/* Small Card (Top Right) */}
        <div className="relative group bg-gray-100 p-6 border-[#2D7BFD] border min-h-[100px] w-full flex flex-col justify-between overflow-hidden">
          {/* Backdrop Image (Initially Hidden) */}
          <img 
            src={backdropimage} 
            alt="Backdrop" 
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110 group-hover:blur-sm"
          />

          {/* Content (Ensures text stays on top) */}
          <div className="relative z-10 min-h-[200px] w-full flex flex-col justify-between">
            <h3 className="text-xl font-bold group group-hover:text-white text-[#040404]">
              Optimizing costs with data migration to the cloud for a leading stock photography platform
              <span>
                <p className="text-xs text-gray-500 font-medium mt-4">AI & ML • 15 March 2025</p>
              </span>
            </h3>
            <button className="mt-4 bg-gradient-to-r from-[#5c720d] to-[#b9eb08] text-xs text-white px-4 py-1 w-fit">
              Read More
            </button>
          </div>

          {/* Overlay to Improve Readability */}
          <div className="absolute inset-0 bg-orange-200 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
          <span className="absolute right-6 bottom-6 text-white text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100">
            <GoArrowRight className="w-10 h-14 transition-all duration-500 group-hover:w-20 text-sky-50"/>
          </span>
        </div>

        {/* Additional News Cards */}
        <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[100px] w-full flex flex-col justify-between">
          <h3 className="text-xl font-bold group group-hover:text-white text-[#040404]">
            From concept to launch, we create stunning, user-centric websites that elevate your brand 
            <span>
              <p className="text-xs text-gray-500 font-medium mt-4">Web Development • 18 March 2025</p>
            </span>
          </h3>
          <button className="mt-4 bg-gradient-to-r from-[#1C18FF] to-[#2915ac] text-xs text-white px-4 py-1 w-fit">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[100px] w-full flex flex-col justify-between">
          <h3 className="text-xl font-bold group group-hover:text-white text-[#040404]">
            From concept to launch, we create stunning, user-centric websites that elevate your brand 
            <span>
              <p className="text-xs text-gray-500 font-medium mt-4">IoT • 21 March 2025</p>
            </span>
          </h3>
          <button className="mt-4 bg-gradient-to-r from-[#03ce46] to-[#026830] text-xs text-white px-4 py-1 w-fit">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-6 border-[#2D7BFD] border-1 min-h-[100px] w-full flex flex-col justify-between">
          <h3 className="text-xl font-bold group group-hover:text-white text-[#040404]">
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
