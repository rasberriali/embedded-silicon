import {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import vlsiBg from "../../../assets/images/vlsiBg.svg";
import partnership from "../../../assets/images/partnership.svg";
import frame1 from "../../../assets/images/frame1.svg";
import frame2 from "../../../assets/images/frame2.svg";
import frame3 from "../../../assets/images/frame3.svg";
import frame4 from "../../../assets/images/frame4.svg";
import vlsiBGG from "../../../assets/images/vlsiBGG.svg";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

function Fullvlsi() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    // Parallax effect for background
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger animations after component mounts
        setIsVisible(true);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
    };
    
    // Tech stack tabs
    const techTabs = [
        { name: "28nm", desc: "Advanced process node optimized for high-performance SoCs" },
        { name: "45nm", desc: "Balanced performance and power for mid-range applications" },
        { name: "65nm", desc: "Cost-effective solution for moderate performance needs" },
        { name: "180nm", desc: "Mature node for analog/mixed-signal and high-voltage designs" }
    ];

    return (
        <div className='font-inter'>
            <div className="relative font-inter xl:h-[80vh] h-[50vh] overflow-hidden">
          <img
                    src={vlsiBg}
                    alt="VLSI Design Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10"/>

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 -z-10"></div>
        
                <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
                    <motion.div 
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={staggerChildren}
                        className="flex flex-row h-full justify-start items-center gap-4"
                    >
                        <motion.div 
                            variants={fadeInLeft}
                            className='w-2 2xl:h-1/2 lg:h-3/5 bg-orange-500'
                        ></motion.div>
                        <motion.div 
                            variants={fadeIn}
                            className="xl:w-1/2 w-full text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                Smarter Design, Embedded
                                in Silicon
                            </span>
                            <motion.div 
                                variants={fadeIn}
                                className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-6 mt-6"
                            >
                                Precision VLSI Solutions for 
                                High-Performance Innovation
                            </motion.div>
                            <motion.div
                                variants={fadeIn}
                                className="flex flex-row gap-4 mt-8"
                            >
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contactPage')}
                                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2 xl:px-8 px-5 rounded-full shadow-lg transition-all xl:text-base text-xs font-medium"
                                >
                                    Get Started
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/servicesPage')}
                                    className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10 py-2 xl:px-8 px-5 rounded-full transition-all xl:text-base text-xs font-medium"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                
              </div>
            {/* Introduction Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className='max-w-screen-xl mx-auto flex flex-col text-black justify-center items-center mt-32 font-inter px-6'
            >
                <div className='flex flex-col justify-center items-center gap-6 w-full md:w-3/4'>
                    <div className='relative'>
                        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-full px-4 py-1'>
                            <span className='text-blue-600 font-medium text-sm'>INDUSTRY LEADER</span>
                        </div>
                        <h2 className='xl:text-5xl text-3xl font-bold text-center mt-4'>
                            Full VLSI <span className="text-blue-600">Design Services</span>
                        </h2>
                    </div>
                    <div className='text-[#4A5565] xl:text-lg text-sm text-center max-w-3xl'>
                        At Embedded Silicon we provide end-to-end VLSI Design Flow Services, ensuring a
                        seamless and optimized approach to integrated chip development. 
                        From concept to production, our expertise covers every stage of the design process, 
                        delivering high-performance, cost-effective solutions tailored to your specific needs.
                    </div>
                    
                    {/* Technology tabs */}
                    <div className="w-full mt-6">
                        <div className="flex w-wrap justify-center gap-2 mb-6">
                            {techTabs.map((tab, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                        activeTab === index
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {tab.name}
                                </motion.button>
                            ))}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-blue-50 p-6 rounded-xl text-center"
                            >
                                <p className="text-blue-800">{techTabs[activeTab].desc}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* Services Grid Section */}
            <div className="relative z-10 max-w-screen-xl mx-auto mt-20 2xl:py-12 2xl:px-0 lg:py-12 lg:px-6 p-6">
                <motion.div 
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Functional Design Section */}
                    <motion.div 
                        variants={scaleUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-gradient-to-br from-[#EBF1FF] to-[#F5F9FF] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={vlsiBGG}
                                alt="Functional Design Process"
                                className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm w-5/6 mx-auto -mt-12 relative p-4 rounded-xl shadow-lg">
                            <h2 className="text-xl font-semibold text-center text-blue-600">Functional Design</h2>
                            <p className="text-gray-600 mt-2 text-center xl:text-base text-sm">
                                We begin with a comprehensive functional design phase, ensuring
                                accurate architecture and logic development. Our team leverages
                                industry-standard methodologies to optimize design efficiency and
                                performance.
                            </p>
                        </div>
                    </motion.div>

                    {/* Floor Planning & Place and Route Sections */}
                    <div className="grid gap-6">
                        <motion.div 
                            variants={fadeInRight}
                            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-50"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <img src={frame1} alt="Floor Planning Icon" className="w-10 h-10" />
                                </div>
                                <h2 className="text-xl font-semibold text-blue-600">Floor Planning</h2>
                            </div>
                            
                            <p className="text-gray-600 mt-4 xl:text-base text-sm">
                                Strategic floor planning is essential to achieving optimal chip
                                performance and minimizing area constraints. We carefully define
                                layout structures, power distribution, and interconnect
                                strategies to enhance design quality.
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={fadeInRight}
                            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-50"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <img src={frame2} alt="Place and Route Icon" className="w-10 h-10" />
                                </div>
                                <h2 className="text-xl font-semibold text-blue-600">Place and Route (PnR)</h2>
                            </div>
                            <p className="text-gray-600 mt-4 xl:text-base text-sm">
                                Our experts employ advanced placement and routing techniques to
                                optimize timing, power consumption, and signal integrity. We use
                                state-of-the-art tools to ensure smooth integration and high
                                yield.
                            </p>
                        </motion.div>
                    </div>

                    {/* Chip Implementation Section */}
                    <div className="grid gap-6">
                        <motion.div 
                            variants={fadeInLeft}
                            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-50"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <img src={frame3} alt="Chip Implementation Icon" className="w-10 h-10" />
                                </div>
                                <h2 className="text-xl font-semibold text-blue-600">Chip Implementation</h2>
                            </div>
                            <p className="text-gray-600 mt-4 xl:text-base text-sm">
                                Our chip implementation process transforms design specifications into physical silicon.
                                We optimize for power efficiency, performance, and manufacturability while ensuring
                                design rule compliance and timing closure.
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={fadeInLeft}
                            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-50"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <img src={frame4} alt="Project Tapeout Icon" className="w-10 h-10" />
                                </div>
                                <h2 className="text-xl font-semibold text-blue-600">Project Tapeout</h2>
                            </div>
                            <p className="text-gray-600 mt-4 xl:text-base text-sm">
                                We manage the final stages of chip design, including verification, sign-off, and
                                preparation for manufacturing. Our rigorous quality control ensures your design
                                is ready for fabrication with minimal risk.
                            </p>
                        </motion.div>
                    </div>

                    {/* Partnership Card */}
                    <motion.div 
                        variants={scaleUp}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        className="bg-gradient-to-br from-[#0b2b82] to-[#1a57c2] xl:p-8 p-6 cursor-pointer rounded-2xl shadow-xl text-center relative group overflow-hidden"
                        onClick={() => navigate('/servicesPage')}
                    >
                        <div className="absolute inset-0 bg-[url('../../../assets/images/circuit-pattern.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="overflow-hidden rounded-xl mb-6">
                            <img
                                src={partnership}
                                alt="Partnership Illustration"
                                className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-white text-xl font-bold mb-4">Strategic Partnership</h3>
                        <p className="text-white/90 mb-6 xl:text-base text-sm">
                            Partner with us for seamless VLSI design solutions that drive innovation and performance. Contact us today to discuss your project requirements!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            
                            className="bg-white text-blue-700 hover:bg-blue-50 py-2 px-6 rounded-full shadow-lg transition-all font-medium text-sm"
                           
                        >
                            Explore our services →
                        </motion.button>
                    </motion.div>
                </motion.div>

               

                {/* Testimonials Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-40 mb-20"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">What Our Clients Say</h2>
                        <div className="bg-blue-50 rounded-full py-2 px-6 flex items-center">
                            <span className="text-blue-600 font-medium mr-2">★★★★★</span>
                            <span className="text-gray-600">4.9/5 average rating</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative"
                        >
                            <div className="text-blue-500 text-4xl absolute -top-5 -left-2">❝</div>
                            <div className="flex items-center mb-6 mt-2">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">JD</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">John Doe</h3>
                                    <p className="text-sm text-blue-600">CTO, Tech Innovations</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">"Embedded Silicon's VLSI design services exceeded our expectations. Their team delivered a high-performance chip that met all our requirements and was ready for production ahead of schedule."</p>
                            <div className="text-yellow-400">★★★★★</div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative md:mt-10"
                        >
                            <div className="text-blue-500 text-4xl absolute -top-5 -left-2">❝</div>
                            <div className="flex items-center mb-6 mt-2">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">AS</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Alice Smith</h3>
                                    <p className="text-sm text-blue-600">VP Engineering, MicroTech</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">"The expertise and professionalism of the Embedded Silicon team made our complex VLSI project a success. Their attention to detail and commitment to quality is unmatched."</p>
                            <div className="text-yellow-400">★★★★★</div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative"
                        >
                            <div className="text-blue-500 text-4xl absolute -top-5 -left-2">❝</div>
                            <div className="flex items-center mb-6 mt-2">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">RJ</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Robert Johnson</h3>
                                    <p className="text-sm text-blue-600">Director, Semiconductor Solutions</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">"Working with Embedded Silicon has been transformative for our product development. Their VLSI design services helped us bring our innovative ideas to market faster than ever before."</p>
                            <div className="text-yellow-400">★★★★★</div>
                        </motion.div>
                    </div>
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
                    <div className="bg-gradient-to-r from-[#0a0a0af8] to-[#0B2B82] border border-[#333] rounded-2xl p-10 md:p-12 shadow-2xl relative z-10">
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
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/contactPage')}
                                        className="bg-[#2D7BFD] hover:bg-[#1A57C2] text-white py-2 xl:px-8 px-6 rounded-full shadow-lg transition-all xl:text-base text-xs font-semibold"
                                    >
                                        Book a consultation
                                    </motion.button>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/servicesPage')}
                                        className="border-2 border-white text-white hover:bg-white/10 py-2 xl:px-8 px-6 rounded-full transition-all xl:text-base text-xs font-semibold"
                                    >
                                        Browse services
                                    </motion.button>
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

                {/* FAQ Section - New Addition */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-10 mt-60"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-blue-600">Questions</span></h2>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <details className="group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <h3 className="text-lg font-medium text-gray-900">What technologies do you support?</h3>
                                    <span className="ml-6 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    <p>We support a wide range of process nodes from 180nm down to 28nm across various foundries. Our team has expertise in digital, analog, mixed-signal, and RF designs for diverse applications.</p>
                                </div>
                            </details>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <details className="group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <h3 className="text-lg font-medium text-gray-900">How long does a typical VLSI project take?</h3>
                                    <span className="ml-6 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    <p>Project timelines vary based on complexity, requirements, and the specific services needed. A full VLSI design cycle can range from 6 months to 18+ months. We work closely with clients to establish realistic timelines and milestones.</p>
                                </div>
                            </details>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <details className="group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <h3 className="text-lg font-medium text-gray-900">Do you provide post-silicon support?</h3>
                                    <span className="ml-6 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    <p>Yes, we provide comprehensive post-silicon support including silicon bring-up, debugging, characterization, and production testing support. Our goal is to ensure your design functions correctly in the final silicon implementation.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Fullvlsi
