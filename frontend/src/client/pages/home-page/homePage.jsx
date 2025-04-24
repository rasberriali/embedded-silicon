import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import image1 from "../../../assets/images/Integrated-circuit.jpg"
import image2 from "../../../assets/images/ic.jpg"
import image3 from "../../../assets/images/icc.webp"
import work from "../../../assets/images/work.png"
import Icon1 from "../../../assets/images/Icon1.svg"
import icon2 from "../../../assets/images/icon2.svg"
import icon3 from "../../../assets/images/icon3.svg"
import line from "../../../assets/images/Line.svg"
import backdropimage2 from "../../../assets/images/backdropimage2.svg"
import { GoArrowRight } from "react-icons/go";
import fullvlsi from "../../../assets/images/fullvlsi.svg"
import post from "../../../assets/images/post.svg"
import pnr from "../../../assets/images/pnr.svg"
import microsat from "../../../assets/images/microsat.svg"
import pcb from "../../../assets/images/pcb.svg"
import routeImage from "../../../assets/images/routeImage.svg"
import asicImage from "../../../assets/images/asicBg.svg"
import analogImage2 from "../../../assets/images/analogImage2.svg"
import radpidImage from "../../../assets/images/rapidImage.svg"
import MarqueeAnimation from '../../modal/marqueeAnimation';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const testimonials = [
  {
    name: "John Doe",
    role: "CTO, Tech Innovations",
    initials: "JD",
    rating: "★★★★★",
    text: `"Embedded Silicon's VLSI design services exceeded our expectations. Their team delivered a high-performance chip that met all our requirements and was ready for production ahead of schedule."`,
  },
  {
    name: "Emily Davis",
    role: "Project Lead, Smart Devices Co.",
    initials: "ED",
    rating: "★★★★★",
    text: `"The team's innovative solutions and attention to detail have significantly improved our product development cycle."`,
  },
  {
    name: "Michael Brown",
    role: "VP Engineering, FutureTech",
    initials: "MB",
    rating: "★★★★★",
    text: `"Embedded Silicon's commitment to excellence and timely delivery has made them an invaluable partner."`,
  },
  {
    name: "Sarah Lee",
    role: "CEO, AI Ventures",
    initials: "SL",
    rating: "★★★★★",
    text: `"They demonstrated incredible technical expertise and an impressive turnaround time. Highly recommended!"`,
  },
  {
    name: "Daniel Kim",
    role: "Product Manager, SmartSoft",
    initials: "DK",
    rating: "★★★★★",
    text: `"The quality of service and consistent communication made a big difference for our product launch."`,
  },
  {
    name: "Anna Zhang",
    role: "Director of R&D, BioSys",
    initials: "AZ",
    rating: "★★★★★",
    text: `"They adapted to our needs and delivered outstanding results on our embedded software integration project."`,
  },
];

function HomePage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const autoplay = setInterval(() => {
        setActiveIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
      }, 5000);
      return () => clearInterval(autoplay);
    }, []);
   
    return (
      <div>
        {/* Hero Section */}
        <div className='relative overflow-hidden'>          
          <div className="absolute inset-0 opacity-5" style={{ 
                backgroundImage: `linear-gradient(to right, #2D7BFD 1px, transparent 1.2px),
                                 linear-gradient(to bottom, #2D7BFD 1px, transparent 1.2px)`,
                backgroundSize: '40px 40px'
              }}></div>

          <div className='max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter relative z-10 '>
            {/* Hero Content */}
            <div className='flex flex-col md:flex-col xl:flex-row py-4 lg:py-4 2xl:py-12 relative'>
              {/* Circuit pattern overlay */}
             
              
              {/* Left Side Content */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className='relative flex xl:w-1/2 flex-col gap-4 z-10 justify-center items-center xl:items-start xl:justify-start '
              >
                <motion.div 
                  variants={fadeInDown}
                  className="bg-blue-500/10 text-blue-600 text-sm font-semibold py-1.5 px-5 rounded-full inline-block"
                >
                  We are ESI Labs
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className='text-3xl md:text-4xl xl:text-5xl text-center xl:text-left font-inter font-bold tracking-tight mt-4 '
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A57C2] to-[#2D7BFD]">
                     A Full-stack
                  </span> technology development partner
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className='text-[#4A5565] text-base xl:text-lg xl:text-left text-center xl:p-0 p-2 mt-4 leading-relaxed max-w-xl'
                >
                  A leading Philippine tech firm specializing in <span className="font-medium">IC Design</span>,
                  <span className="font-medium"> embedded systems</span>, rapid prototyping, and 
                  <span className="font-medium"> ASIC conversion</span>.
                </motion.p>

                <motion.p 
                  variants={fadeIn}
                  className='text-[#040404] font-semibold text-lg xl:text-xl xl:text-left text-center mt-2'
                >
                  Trusted for years in providing reliable tech solutions.
                </motion.p>
                
                <motion.div 
                  variants={fadeIn}
                  className="h-px w-full xl:w-2/3 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 my-6"
                ></motion.div>
                  
                <motion.div 
                  variants={staggerContainer}
                  className="flex flex-wrap w-full xl:justify-start justify-center items-center gap-8 xl:gap-12"
                >
                  <motion.div variants={fadeInUp} className="flex flex-col xl:items-start items-center text-center">
                    <div className="flex flex-row items-center text-[#1A57C2] font-bold">
                      <div className="text-3xl xl:text-4xl leading-none">50+</div>
                    </div>
                    <div className="text-[#647185] font-medium text-sm xl:text-base mt-1">engineers and growing</div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="flex flex-col xl:items-start items-center text-center">
                    <div className="flex flex-row items-center text-[#1A57C2] font-bold">
                      <div className="text-3xl xl:text-4xl leading-none">100+</div>
                    </div>
                    <div className="text-[#647185] font-medium text-sm xl:text-base mt-1">projects delivered</div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-row gap-4 mt-4"
                >
                  <button 
                    onClick={() => navigate('/aboutPage')}
                    className="group flex items-center gap-2 bg-[#2D7BFD] hover:bg-[#1A57C2] transition-all duration-300 py-1 px-6 rounded-full text-white font-medium shadow-lg hover:shadow-blue-500/30"
                  >
                    Learn more
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <GoArrowRight />
                    </span>
                  </button>
                  
                  <button
                    onClick={() => navigate('/contactPage')}
                    className="flex items-center gap-2 border-2 border-[#2D7BFD] text-[#2D7BFD] hover:bg-[#2D7BFD]/10 transition-all duration-300 py-1 px-6 rounded-full font-medium"
                  >
                    Contact us
                  </button>
                </motion.div>
              </motion.div>
            
              {/* Right Side Images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='xl:w-1/2 hidden lg:block'
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ 
                    y: [0, -15, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  className="relative"
                >
                  {/* Glowing backdrop effect */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: [0.6, 0.8, 0.6],
                      scale: [0.9, 1, 0.9],
                      transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D7BFD]/10 rounded-full blur-[100px]">
                  </motion.div>
                  
                  {/* Image stack with improved shadows and animation */}
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    src={image1} 
                    alt="Integrated Circuit" 
                    className="absolute top-0 left-0 w-[680px] h-[350px] object-cover rounded-2xl shadow-[0_10px_50px_rgba(8,112,184,0.2)] z-10" 
                  />
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    src={image2} 
                    alt="Integrated Circuit Design" 
                    className="absolute top-8 left-6 w-[690px] h-[360px] object-cover rounded-2xl shadow-[0_10px_50px_rgba(8,112,184,0.3)] z-20" 
                  />
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    src={image3} 
                    alt="Integrated Circuit Close-up" 
                    className="absolute top-16 left-12 w-[700px] h-[370px] object-cover rounded-2xl shadow-[0_10px_50px_rgba(8,112,184,0.4)] z-30" 
                  />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Mobile Image (only visible on small screens) */}
            <div className="lg:hidden w-full flex justify-center mb-10">
              <div className="relative w-full max-w-md">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.5, 0.7, 0.5],
                    scale: [0.9, 1, 0.9],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2D7BFD]/10 rounded-full blur-[50px]">
                </motion.div>
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  src={image3} 
                  alt="Integrated Circuit Mobile View" 
                  className="w-full h-auto rounded-2xl shadow-[0_10px_50px_rgba(8,112,184,0.3)] relative z-10 mt-4" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto 2xl:p-0 lg:p-6 p-6'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="gap-4 xl:mt-12 mt-0 w-full flex flex-col items-center justify-start text-start"
          >
            <motion.div variants={fadeInUp} className="w-full px-3 xl:px-0 mt-20">
              <h1 className="text-[#040404] xl:text-4xl text-4xl font-semibold font-inter">
                Your <span className="text-[#2D7BFD] font-semibold">all-in-one</span> IC and embedded <br />
                solutions expert
              </h1>
              <p className="mt-8 text-[#647185] xl:text-xl text-base">
                We specialize in delivering cutting-edge technology with seamless execution, keeping you involved every step of the way.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className='flex xl:flex-row flex-col justify-between gap-4 mt-20'
          >
            <motion.div variants={fadeInUp} className='flex flex-row xl:w-2/5 w-full'>
              <div className='flex flex-col w-1/2 items-center gap-6 py-6'>
                <div className='bg-[#2D7BFD] p-6 rounded-full'>
                  <img src={Icon1} alt="icons1" className='h-10 w-10' />
                </div>
                <div className=''>
                  <img src={line} alt="line" className='h-25'/>
                </div>
                <div className='bg-[#2D7BFD] p-6 rounded-full'>
                  <img src={icon2} alt="icons2" className='h-10 w-10' />
                </div>
                <div className=''>
                  <img src={line} alt="line" className='h-25'/>
                </div>
                <div className='bg-[#2D7BFD] p-6 rounded-full'>
                  <img src={icon3} alt="icons3" className='h-10 w-10' />
                </div>
              </div>

              <div className='flex flex-col w-full gap-32 px-2 xl:py-6 p-6'>
                <div className='flex flex-col text-[#040404] text-xl font-medium gap-2'> Innovative 
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
            </motion.div>

            <motion.div variants={fadeInUp} className='flex flex-col w-full sm:w-3/5 items-center mt-5 justify-start'>
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
            </motion.div>
          </motion.div>
        </div>

        {/* Our Clients */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className='flex flex-row xl:mt-30 mt-30 justify-center p-4'
        >
          <div className='flex flex-col'>
            <div className='text-black text-[50px] flex flex-col justify-center items-center gap-2 font-bold'>
              Our clients <span className='text-xl text-[#647185] font-normal text-center'>Some of the businesses and startups we have worked with</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-screen-xl mx-auto flex flex-col justify-center items-start mt-20 overflow-hidden"
        >
          <MarqueeAnimation/>
        </motion.div>

        {/* What We Do Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="xl:mt-40 mt-30 py-16 relative bg-[#050505] overflow-hidden"
        >
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,0.393 L59.95,5.716 L38.85,26.816 L45.374,33.34 L56.4,22.314 L54.627,20.541 L58.364,16.804 L47.861,6.301 L51.598,2.564 L49.673,0.639 L41.902,8.41 L40.015,6.525 L36.408,10.132 L39.122,12.846 L37.091,14.877 L39.887,17.673 L37.968,19.591 L40.764,22.387 L38.661,24.49 L40.675,26.504 L47.596,19.583 L54.627,26.614 L59.95,21.291 L54.627,15.968 L59.95,10.645 L54.627,5.322 L59.95,0 L54.627,0.393 L54.627,0.393 Z' fill='%232D7BFD' fill-rule='evenodd'/%3E%3C/svg%3E')" }}></div>
          
          {/* Decorative blurry circles */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2D7BFD]/25 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2D7BFD]/30 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D7BFD]/20 rounded-full blur-[120px]"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ 
            backgroundImage: `linear-gradient(to right, #2D7BFD 1px, transparent 1.2px),
                             linear-gradient(to bottom, #2D7BFD 1px, transparent 1.2px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Content container */}
          <div className="max-w-screen-xl mx-auto px-6 2xl:px-0 relative">
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-16 font-inter">
              <h2 className="text-5xl xl:text-5xl font-bold text-white mb-6 tracking-tight">What We Do</h2>
              <p className=" max-w-5xl xl:text-xl leading-relaxed font-normal text-xl text-[#647185] ">
                We deliver cutting-edge IC design and embedded solutions that drive innovation in the technology sector
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { title: "Integrated Chip Design", desc: "Advanced IC design with proven processes and deep expertise for reliable project delivery.", icon: fullvlsi},
                { title: "ASIC Verification", desc: "Comprehensive verification ensuring functionality, performance, and reliability of custom chips.", icon: post },
                { title: "Physical Design", desc: "Optimizing layout and implementing physical constraints for manufacturability and performance.", icon: pnr },
                { title: "FPGA Development", desc: "Rapid prototyping and hardware implementation using programmable logic solutions.", icon: microsat },
                { title: "Custom ASIC Solutions", desc: "Tailored chip solutions designed for your specific performance and power requirements.", icon: pcb },
                { title: "Design Consultancy", desc: "Expert guidance and technical advice throughout your project lifecycle.", icon: fullvlsi }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  className="group bg-[#101010]/30 border-1 border-[#333] rounded-xl shadow-lg hover:shadow-[#2D7BFD]/30 transition-all duration-300 overflow-hidden hover:border-[#2D7BFD]/50 cursor-pointer"
                  onClick={() => navigate(service.link || `/${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div className="border-t-4 border-[#2D7BFD] h-1 w-0 group-hover:w-full transition-all duration-500"></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#2D7BFD]/20 w-16 h-16 rounded-full flex items-center justify-center mr-5 group-hover:bg-[#2D7BFD]/30 transition-colors duration-300">
                        <img src={service.icon} alt={service.title} className="w-8 h-8 filter brightness-0 invert" />
                      </div>
                      <h3 className="text-white text-xl font-semibold tracking-tight font-inter">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-200 xl:text-base text-sm font-inter font-light leading-relaxed mb-8">{service.desc}</p>
                    
                    <div className="flex items-center text-[#2D7BFD] font-semibold text-sm">
                      <span>Learn more</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        <GoArrowRight className="w-6 h-6" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>  
          </div>
        </motion.div>

        <div className="mx-auto max-w-screen-xl 2xl:p-0  p-6 font-inter mt-20">
         <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.7 }}
                   viewport={{ once: true, margin: "-100px" }}
                   className="mt-10 mb-20"
                 >
                   <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                     <h2 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">
                       What Our Clients Say
                     </h2>
                     <div className="bg-blue-50 rounded-full py-2 px-6 flex items-center">
                       <span className="text-blue-600 font-medium mr-2">★★★★★</span>
                       <span className="text-gray-600">4.9/5 average rating</span>
                     </div>
                   </div>
         
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activeIndex}
                       initial={{ opacity: 0, x: 50 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -50 }}
                       transition={{ duration: 0.6 }}
                         className="flex flex-col md:flex-row justify-center xl:items-stretch items-center gap-6"
                     >
                       {testimonials.slice(activeIndex, activeIndex + 3).map((t, idx) => {
                         const isMiddle = idx === 1;
                         return (
                           <div
                           key={idx}
                           className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 relative flex flex-col justify-between xl:w-full w-[350px] ${
                             isMiddle ? "md:mt-10" : ""
                           }`}
                         >
                             <div className="text-blue-500 text-4xl absolute -top-5 -left-2">
                               ❝
                             </div>
                             <div className="flex items-center mb-6 mt-2">
                               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                 {t.initials}
                               </div>
                               <div className="ml-4">
                                 <h3 className="font-semibold text-lg">{t.name}</h3>
                                 <p className="text-sm text-blue-600">{t.role}</p>
                               </div>
                             </div>
                             <p className="text-gray-700 italic mb-4">{t.text}</p>
                             <div className="text-yellow-400">{t.rating}</div>
                           </div>
                         );
                       })}
                     </motion.div>
                   </AnimatePresence>
                 </motion.div>

                {/* Call to Action Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-50 mb-20 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('../../../assets/images/circuit-pattern.png')] opacity-5"></div>
                    <div className="bg-gradient-to-r font-inter from-[#0a0a0af8] to-[#0B2B82] border border-[#333] rounded-2xl p-10 md:p-12 shadow-2xl relative z-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
                        
                        <div className="flex flex-col xl:flex-row items-center justify-between relative z-10">
                            <div className="xl:w-2/3 xl:pr-10">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6"
                                >
                                    15+ Years of Excellence
                                </motion.div>
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight"
                                >
                                    Ready to transform your technology vision?
                                </motion.h3>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-[#E0E0E0] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed"
                                >
                                    Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services. Let's create the future together.
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex flex-row gap-4"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/contactPage')}
                                        className="bg-[#2D7BFD] hover:bg-[#1A57C2] flex flex-col justify-center text-white py-1 xl:px-8 px-6 rounded-full shadow-lg transition-all xl:text-base text-xs font-normal"
                                    >
                                        Book a call
                                    </motion.div>
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/servicesPage')}
                                        className="border-2 border-white text-white  flex flex-col justify-center hover:bg-white/10 py-1  xl:px-8 px-6 rounded-full transition-all xl:text-base text-xs font-normal"
                                    >
                                        Browse services
                                    </motion.div>
                                </motion.div>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="xl:w-1/3 mt-12 xl:mt-0"
                            >
                                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                                    <h4 className="text-white font-semibold text-lg mb-6">Why Choose Us?</h4>
                                    <ul className="text-white/90 space-y-4">
                                        <li className="flex items-center">
                                            <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                                                <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Industry-leading expertise</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                                                <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Proven track record</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                                                <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>End-to-end solutions</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="bg-blue-600/20 rounded-full p-2 mr-4">
                                                <svg className="w-5 h-5 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Customer-centric approach</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
      </div>




        

  {/* Latest News Section */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="max-w-screen-xl mx-auto mt-50 font-inter lg:px-6 2xl:px-0 px-6"
  >
    <motion.div variants={fadeInUp} className="text-center mb-16">
      <h2 className="text-4xl xl:text-5xl font-bold text-[#040404] mb-4">
        Latest News
      </h2>
      <p className="text-xl text-[#647185] max-w-2xl mx-auto">
        Stay updated with our latest innovations, achievements, and industry insights
      </p>
    </motion.div>

    {/* News Grid */}
    <motion.div variants={staggerContainer} className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
      {/* Featured News Card */}
      <div className="xl:col-span-2 xl:row-span-1 group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={backdropimage2}
            alt="Featured News"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2D7BFD] text-white text-sm font-medium mb-4">
                Featured
              </span>
              <h3 className="text-2xl xl:text-3xl font-bold text-white mb-4 line-clamp-2">
                Full-stack technology development partner
              </h3>
              <p className="text-gray-200 text-sm mb-6">
                Discover how we're revolutionizing the tech industry with our comprehensive solutions
              </p>
              <div className="flex items-center text-white">
                <span className="text-sm">Read more</span>
                <GoArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Cards */}
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[200px] overflow-hidden">
          <img 
            src={routeImage} 
            alt="News" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#2D7BFD]/10 text-[#2D7BFD] text-xs font-medium">
              AI & ML
            </span>
            <span className="text-gray-500 text-sm">15 March 2025</span>
          </div>
          <h3 className="text-xl font-bold text-[#040404] mb-3 line-clamp-2 group-hover:text-[#2D7BFD] transition-colors duration-300">
            Optimizing costs with data migration to the cloud for a leading stock photography platform
          </h3>
          <div className="flex items-center text-[#2D7BFD]">
            <span className="text-sm font-medium">Read more</span>
            <GoArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[200px] overflow-hidden">
          <img 
            src={asicImage} 
            alt="News" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#2D7BFD]/10 text-[#2D7BFD] text-xs font-medium">
              Web Development
            </span>
            <span className="text-gray-500 text-sm">18 March 2025</span>
          </div>
          <h3 className="text-xl font-bold text-[#040404] mb-3 line-clamp-2 group-hover:text-[#2D7BFD] transition-colors duration-300">
            From concept to launch, we create stunning, user-centric websites that elevate your brand
          </h3>
          <div className="flex items-center text-[#2D7BFD]">
            <span className="text-sm font-medium">Read more</span>
            <GoArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[200px] overflow-hidden">
          <img 
            src={radpidImage} 
            alt="News" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#2D7BFD]/10 text-[#2D7BFD] text-xs font-medium">
              IoT
            </span>
            <span className="text-gray-500 text-sm">21 March 2025</span>
          </div>
          <h3 className="text-xl font-bold text-[#040404] mb-3 line-clamp-2 group-hover:text-[#2D7BFD] transition-colors duration-300">
            Revolutionizing IoT solutions with cutting-edge technology and seamless integration
          </h3>
          <div className="flex items-center text-[#2D7BFD]">
            <span className="text-sm font-medium">Read more</span>
            <GoArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[200px] overflow-hidden">
          <img 
            src={analogImage2} 
            alt="News" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#2D7BFD]/10 text-[#2D7BFD] text-xs font-medium">
              Security
            </span>
            <span className="text-gray-500 text-sm">25 March 2025</span>
          </div>
          <h3 className="text-xl font-bold text-[#040404] mb-3 line-clamp-2 group-hover:text-[#2D7BFD] transition-colors duration-300">
            Enhancing cybersecurity with advanced threat detection and prevention systems
          </h3>
          <div className="flex items-center text-[#2D7BFD]">
            <span className="text-sm font-medium">Read more</span>
            <GoArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</div>
    )
  }
export default HomePage