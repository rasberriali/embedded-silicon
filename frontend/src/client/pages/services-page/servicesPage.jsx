import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import servicesbg3 from "../../../assets/images/services-bg-3.jpg"
import dot from "../../../assets/images/dotgrid.svg"
import icon3 from "../../../assets/images/icon3.svg"
import arrow from "../../../assets/images/arrow-blue.svg"
import iconservices1 from "../../../assets/images/icon-services1.svg"
import asic from "../../../assets/images/asic.svg"
import post from "../../../assets/images/post.svg"
import standard from "../../../assets/images/standard.svg"
import fullchip from "../../../assets/images/fullchip.svg"
import backdropimage2 from "../../../assets/images/backdropimage2.svg";
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
import servicebg from "../../../assets/images/serviceBg.svg"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServiceCard = ({ icon, title, description, onClick }) => (
  <motion.div 
    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-row gap-6 mb-4">
      <motion.div 
        className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center"
        whileHover={{ backgroundColor: "#2D7BFD" }}
      >
        <motion.img 
          src={icon} 
          alt="" 
          className="w-8 h-8"
          whileHover={{ filter: "brightness(0) invert(1)" }}
        />
      </motion.div>
      <motion.div 
        className="w-full text-xl font-bold text-gray-800"
        whileHover={{ color: "#2D7BFD" }}
      >
        {title}
      </motion.div>
    </div>
    <div className="text-gray-600 text-base mb-4">
      {description}
    </div>
    <motion.div 
      className="flex justify-end"
      whileHover={{ x: 5 }}
    >
      <img src={arrow} alt="" className="h-6 cursor-pointer" onClick={onClick} />
    </motion.div>
  </motion.div>
);

function ServicesPage() {
  const navigate = useNavigate();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-full xl:h-[80vh] h-[30vh] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={servicebg}
            alt="Services background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
          <motion.img 
            src={dot} 
            alt="" 
            className="absolute top-0 left-0 xl:w-80 xl:h-80 w-40 h-40 opacity-5"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            src={dot} 
            alt="" 
            className="absolute bottom-0 right-0 xl:w-80 xl:h-80 w-40 h-40 opacity-8"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>
        <motion.div 
          className='absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        <div className='flex flex-col h-full justify-center'>
            <motion.div 
              className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-17 2xl:leading-28 lg:w-1/2 2xl:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Embedded Silicon Tech Expertise
              <motion.div 
                className="text-white text-sm lg:text-xl 2xl:text-2xl font-normal xl:mt-8 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
            We specialize in crafting tailored solutions that drive efficiency and accelerate growth.
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Sections */}
      <motion.div 
        className="space-y-24 py-20 "
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Integrated Chip Design Section */}
        <motion.div 
          className="max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-6"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-1 bg-[#2D7BFD] rounded-full"></div>
              <h2 className="text-[#2D7BFD] text-3xl font-extrabold font-inter">Integrated Chip Design</h2>
            </motion.div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <ServiceCard
                icon={fullvlsi}
                title="Full VLSI Design"
                description="Experience end-to-end VLSI Design Flow Services encompassing Functional Design, Floor Planning, Place and Route, chip implementation, and project tapeout – all streamlined for optimal efficiency."
                onClick={() => navigate('/fullvlsi')}
              />
              <ServiceCard
                icon={fullchip}
                title="Full-Chip Integration"
                description="Experience seamless Full Chip Integration with services like Area Estimation, Floor Planning, Power Planning, and Macro Placement."
              />
              <ServiceCard
                icon={standard}
                title="Standard Cells Development"
                description="Tailor your industry's future with our versatile Standard Cells Development. Customized for sectors like Automotive, Industrial, Consumer Electronics, and more, based on your preferences."
              />
              <ServiceCard
                icon={designlibrary}
                title="Design Library Creation"
                description="Optimize your semiconductor projects with our precise Design Library Creation service tailored to your unique needs."
              />
              <ServiceCard
                icon={analog}
                title="Analog IP Blocks Development"
                description="For your Mixed Signal Applications, we provide specialized Analog IP Blocks, catering to both individual IP Block requirements and comprehensive Chip Level Integration needs."
              />
              <ServiceCard
                icon={fullcustom}
                title="Full Custom Layout"
                description="Explore our Full Custom Layout service, covering Standard Cells to Chip Level Integration. Benefit from our extensive experience across tech nodes, ranging from 180nm to 7nm."
              />
            </div>
          </div>
        </motion.div>

        {/* Application-Specific IC Verification Section */}
        <motion.div 
          className="max-w-screen-xl mx-auto px-4"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-1 bg-[#2D7BFD] rounded-full"></div>
              <h2 className="text-[#2D7BFD] text-3xl font-extrabold font-inter">Application-Specific IC Verification</h2>
            </motion.div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <ServiceCard
                icon={asic}
                title="ASIC Functional Verification"
                description="We conduct a comprehensive process to test and validate application-specific integrated circuits (ASICs), ensuring adherence to specifications and correct functionality."
              />
              <ServiceCard
                icon={post}
                title="Post-PNR Regression"
                description="Elevate your projects with our Post PNR Service featuring Regression Capability. Streamline and enhance your design process for optimal performance and reliability."
              />
              <ServiceCard
                icon={uvm}
                title="UVM Testbench Development"
                description="We specialize in crafting robust and efficient testbenches for thorough verification of your designs, ensuring optimal performance and compliance with specifications."
              />
              <ServiceCard
                icon={rtl}
                title="RTL to Transistor Level Verification"
                description="Proficient in RTL to Transistor Verification, we handle projects seamlessly with logic scales ranging from less than 100,000 up to 7,000,000 Gates and beyond."
              />
              <ServiceCard
                icon={analogmixed}
                title="Analog Mixed Signal Verification"
                description="We excel in meticulous testing and validation of complex mixed-signal designs, ensuring precision and reliability throughout the verification process."
              />
            </div>
          </div>
        </motion.div>

        {/* Physical Design and Verification Section */}
        <motion.div 
          className="max-w-screen-xl mx-auto px-4"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-1 bg-[#2D7BFD] rounded-full"></div>
              <h2 className="text-[#2D7BFD] text-3xl font-extrabold font-inter">Physical Design and Verification</h2>
            </motion.div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <ServiceCard
                icon={pnr}
                title="Automated Place and Route"
                description="Efficient automated Place and Route services covering Post-Synthesis to GDSII Clean Database. Expertise in 22nm to 40nm Tech nodes, with proficiency in Timing and Power Closures up to Physical Verification."
              />
              <ServiceCard
                icon={fullcustom}
                title="Full Custom Layout Proficiency"
                description="Explore our Full Custom Layout service, covering Standard Cells to Chip Level Integration. Benefit from our extensive experience across tech nodes, ranging from 180nm to 7nm."
              />
              <ServiceCard
                icon={microsat}
                title="Proficiency across Technology Nodes"
                description="We specialize in developing and implementing advanced applications for microsatellites, ensuring precision and reliability for diverse mission requirements."
              />
              <ServiceCard
                icon={standard}
                title="Tailored Designs for Varied Industries"
                description="Specializing in automated test solution design for customer circuit boards, cables, and system assemblies, our team excels in the development and documentation of integrated test tools for seamless incorporation into the manufacturing process."
              />
            </div>
          </div>
        </motion.div>

        {/* FPGA Development Section */}
        <motion.div 
          className="max-w-screen-xl mx-auto px-4"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-1 bg-[#2D7BFD] rounded-full"></div>
              <h2 className="text-[#2D7BFD] text-3xl font-extrabold font-inter">FPGA Development</h2>
            </motion.div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <ServiceCard
                icon={fpgatoasic}
                title="FPGA to ASIC"
                description="Embark on seamless FPGA to ASIC Development with our specialized services, facilitating a smooth transition from FPGA designs to ASICs, optimizing performance and scalability."
              />
              <ServiceCard
                icon={tailord}
                title="Test Development Platforms"
                description="Specializing in automated test solution design for customer circuit boards, cables, and system assemblies, our team excels in the development and documentation of integrated test tools for seamless incorporation into the manufacturing process."
              />
              <ServiceCard
                icon={microsat}
                title="Microsatellites"
                description="We specialize in developing and implementing advanced applications for microsatellites, ensuring precision and reliability for diverse mission requirements."
              />
            </div>
          </div>
        </motion.div>

        {/* Embedded Systems Development Section */}
        <motion.div 
          className="max-w-screen-xl mx-auto px-4"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-1 bg-[#2D7BFD] rounded-full"></div>
              <h2 className="text-[#2D7BFD] text-3xl font-extrabold font-inter">Embedded Systems Development</h2>
            </motion.div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <ServiceCard
                icon={rapid}
                title="Rapid Prototyping"
                description="Engage our rapid prototyping services encompassing PCB layout, assembly, cable assembly, and comprehensive Design for Manufacturing analysis."
              />
              <ServiceCard
                icon={pcb}
                title="PCB Layout and Design"
                description="Delivering extensive technical services in circuit board design, our engineers efficiently interpret design intent and regulatory requirements from customer schematics. We then craft layouts optimized for seamless functional application."
              />
              <ServiceCard
                icon={firmware}
                title="Firmware Development"
                description="We specialize in crafting robust and efficient firmware solutions, ensuring optimal performance and seamless integration with your hardware."
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
  </div>
  )
}

export default ServicesPage
