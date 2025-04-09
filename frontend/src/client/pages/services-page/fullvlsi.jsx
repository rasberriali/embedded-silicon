import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import vlsiBg from "../../../assets/images/vlsiBg.svg";
import partnership from "../../../assets/images/partnership.svg";
import frame1 from "../../../assets/images/frame1.svg";
import frame2 from "../../../assets/images/frame2.svg";
import frame3 from "../../../assets/images/frame3.svg";
import frame4 from "../../../assets/images/frame4.svg";
import vlsiBGG from "../../../assets/images/vlsiBGG.svg";
import { motion } from 'framer-motion';

function Fullvlsi() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

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

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className='font-inter'>
            {/* Hero Section with Parallax Effect */}
            <div className="relative font-inter xl:h-[80vh] h-[40vh] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={vlsiBg}
                    alt="VLSI Design Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/0 -z-10"></div>
        
                <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
                    <motion.div 
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={staggerChildren}
                        className="flex flex-row h-full justify-start items-center gap-4"
                    >
                        <motion.div 
                            variants={fadeIn}
                            className='w-2 xl:h-2/5 h-3/5 bg-orange-500'
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
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Introduction Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className='max-w-screen-xl mx-auto flex flex-col text-black justify-center items-center mt-20 font-inter'
            >
                <div className='flex flex-col justify-center items-center gap-4 w-3/4'>
                    <div className='xl:text-4xl text-2xl font-bold text-blue-600'>
                        Full VLSI <span className="text-[#0B2B82]">Design Services</span>
                    </div>
                    <div className='text-[#4A5565] xl:text-lg text-sm text-center'>
                        At Embedded Silicon we provide end-to-end VLSI Design Flow Services, ensuring a
                        seamless and optimized approach to integrated chip development. 
                        From concept to production, our expertise covers every stage of the design process, 
                        delivering high-performance, cost-effective solutions tailored to your specific needs.
                    </div>
                </div>
            </motion.div>

            {/* Services Grid Section */}
            <div className="relative z-10 max-w-screen-xl mx-auto mt-20 2xl:py-12 2xl:px-0 lg:py-12 lg:px-6 p-6">
                <motion.div 
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Functional Design Section */}
                    <motion.div 
                        variants={fadeIn}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-[#EBF1FF] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={vlsiBGG}
                                alt="Functional Design Process"
                                className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-center text-blue-600">Functional Design</h2>
                        <p className="text-gray-600 mt-2 text-center xl:text-base text-sm">
                            We begin with a comprehensive functional design phase, ensuring
                            accurate architecture and logic development. Our team leverages
                            industry-standard methodologies to optimize design efficiency and
                            performance.
                        </p>
                    </motion.div>

                    {/* Floor Planning & Place and Route Sections */}
                    <div className="grid gap-6">
                        <motion.div 
                            variants={fadeIn}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <img src={frame1} alt="Floor Planning Icon" className="w-10 h-10" />
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
                            variants={fadeIn}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <img src={frame2} alt="Place and Route Icon" className="w-10 h-10" />
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
                            variants={fadeIn}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <img src={frame3} alt="Chip Implementation Icon" className="w-10 h-10" />
                                <h2 className="text-xl font-semibold text-blue-600">Chip Implementation</h2>
                            </div>
                            <p className="text-gray-600 mt-4 xl:text-base text-sm">
                                Our chip implementation process transforms design specifications into physical silicon.
                                We optimize for power efficiency, performance, and manufacturability while ensuring
                                design rule compliance and timing closure.
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <img src={frame4} alt="Project Tapeout Icon" className="w-10 h-10" />
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
                        variants={fadeIn}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        className="bg-[#EBF1FF] xl:p-8 p-4 rounded-2xl shadow-md text-center relative group overflow-hidden"
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={partnership}
                                alt="Partnership Illustration"
                                className="w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div
                            className=" absolute inset-0 flex items-end justify-end p-6 text-blue-600 font-semibold text-sm cursor-pointer hover:text-blue-800 transition-colors"
                            onClick={() => navigate('/servicesPage')}
                        >
                            → Explore our services
                        </div>
                        <p className="absolute inset-0 flex items-center justify-center p-16 text-white font-semibold pointer-events-none text-center xl:text-base text-sm">
                            Partner with us for seamless VLSI design solutions that drive innovation and performance. Contact us today to discuss your project requirements!
                        </p>
                    </motion.div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-30"
                >
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">JD</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">John Doe</h3>
                                    <p className="text-sm text-gray-500">CTO, Tech Innovations</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"Embedded Silicon's VLSI design services exceeded our expectations. Their team delivered a high-performance chip that met all our requirements and was ready for production ahead of schedule."</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">AS</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Alice Smith</h3>
                                    <p className="text-sm text-gray-500">VP Engineering, MicroTech</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"The expertise and professionalism of the Embedded Silicon team made our complex VLSI project a success. Their attention to detail and commitment to quality is unmatched."</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">RJ</div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Robert Johnson</h3>
                                    <p className="text-sm text-gray-500">Director, Semiconductor Solutions</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"Working with Embedded Silicon has been transformative for our product development. Their VLSI design services helped us bring our innovative ideas to market faster than ever before."</p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="mt-40 bg-gradient-to-r from-[#0a0a0af8] to-[#0B2B82] border border-[#333] rounded-xl p-10 shadow-lg"
                >
                    <div className="flex flex-col xl:flex-row items-center justify-between">
                        <div className="xl:w-2/3 xl:pr-10">
                            <div className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6">15+ Years of Excellence</div>
                            <h3 className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight">Ready to transform your technology vision?</h3>
                            <p className="text-[#E0E0E0] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed">
                                Our team of experienced engineers can bring your innovative ideas to life with our comprehensive suite of IC design and embedded systems services.
                            </p>
                            <div className="flex flex-row gap-4">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contactPage')}
                                    className="bg-[#2D7BFD] hover:bg-[#1A57C2] text-white py-2 xl:px-6 px-4 rounded-full shadow-sm transition-colors xl:text-sm text-xs font-semibold cursor-pointer"
                                >
                                    Book a consultation
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/servicesPage')}
                                    className="border-2 border-white text-white hover:bg-white/10 py-2 xl:px-6 px-4 rounded-full transition-colors xl:text-sm text-xs font-semibold cursor-pointer"
                                >
                                    Browse services
                                </motion.div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 mt-10 xl:mt-0">
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <h4 className="text-white font-semibold mb-4">Why Choose Us?</h4>
                                <ul className="text-white/80 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Industry-leading expertise
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Proven track record
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#2D7BFD]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        End-to-end solutions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Fullvlsi
