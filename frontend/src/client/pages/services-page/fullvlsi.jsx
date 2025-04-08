import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import vlsiBg from "../../../assets/images/vlsiBg.svg";
import bentImg from "../../../assets/images/bentImg.svg";
import partnership from "../../../assets/images/partnership.svg";
import frame1 from "../../../assets/images/frame1.svg";
import frame2 from "../../../assets/images/frame2.svg";
import frame3 from "../../../assets/images/frame3.svg";
import frame4 from "../../../assets/images/frame4.svg";
import vlsiBGG from "../../../assets/images/vlsiBGG.svg";


function Fullvlsi() {
    const navigate = useNavigate();

      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  return (
    <div className='font-inter'>
          <div className="relative font-inter xl:h-[70vh] h-[30vh] ">
            {/* Background Image */}
            <img
              src={vlsiBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
      
            {/* Faded Overlay using Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-blue-400/10 to-black/30 -z-10"></div>
      
            {/* Content */}
            <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
              <div className="flex flex-col h-full justify-center">
                <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
                Smarter Design, Embedded
                in Silicon
                  <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                  Precision VLSI Solutions for 
                  High-Performance Innovation
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className=' max-w-screen-xl mx-auto flex flex-col text-black justify-center items-center mt-20 font-inter'>
            <div className='flex flex-col justify-center items-center gap-4  w-3/4'>
                <div className='xl:text-4xl text-2xl font-bold text-blue-600 ['>Full VLSI <span className="text-[#0B2B82]">Design Services</span></div>
                <div className='text-[#4A5565] xl:text-lg text-sm text-center'>At Embedded Silicon we provide end-to-end VLSI Design Flow Services, ensuring a
                  seamless and optimized approach to integrated chip development. 
                  From concept to production, our expertise covers every stage of the design process, 
                  delivering high-performance, cost-effective solutions tailored to your specific needs.</div>
            </div>
            </div>
            <div className=" relative z-10 max-w-screen-xl mx-auto mt-20 2xl:py-12 2xl:px-0 lg:py-12 lg:px-6 p-6 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Functional Design Section */}
        <div className="bg-[#EBF1FF] p-6 rounded-2xl shadow-md ">
          <img
            src={vlsiBGG}
            alt="Functional Design"
            className="w-full rounded-2xl"
          />
          <h2 className="text-xl font-semibold mt-4 text-center text-blue-600 ">Functional Design</h2>
          <p className="text-gray-600 mt-2 text-center xl:text-base text-sm ">
            We begin with a comprehensive functional design phase, ensuring
            accurate architecture and logic development. Our team leverages
            industry-standard methodologies to optimize design efficiency and
            performance.
          </p>
        </div>

        {/* Floor Planning & Place and Route Sections */}
        <div className="grid gap-6">
          <div className="bg-white p-12 rounded-2xl shadow-md">
            <div className='flex flex-row gap-4'>
                <img src={frame1} alt=""></img>
            <h2 className="text-xl font-semibold text-blue-600 ">Floor Planning</h2>
            </div>
            
            <p className="text-gray-600 mt-2 xl:text-base text-sm ">
              Strategic floor planning is essential to achieving optimal chip
              performance and minimizing area constraints. We carefully define
              layout structures, power distribution, and interconnect
              strategies to enhance design quality.
            </p>
          </div>
          <div className="bg-white p-12 rounded-2xl shadow-md">
          <div className='flex flex-row gap-4'>
                <img src={frame2} alt=""></img>
            <h2 className="text-xl font-semibold text-blue-600 ">Place and Route (PnR)</h2></div>
            <p className="text-gray-600 mt-2 xl:text-base text-sm ">
              Our experts employ advanced placement and routing techniques to
              optimize timing, power consumption, and signal integrity. We use
              state-of-the-art tools to ensure smooth integration and high
              yield.
            </p>
          </div>
        </div>

        {/* Chip Implementation Section */}
        <div className="grid gap-6">
          <div className="bg-white p-12 rounded-2xl shadow-md">
            <div className='flex flex-row gap-4'>
                <img src={frame3} alt=""></img>
            <h2 className="text-xl font-semibold text-blue-600 ">Chip Implementation</h2></div>
            <p className="text-gray-600 mt-2 xl:text-base text-sm ">
              Strategic floor planning is essential to achieving optimal chip
              performance and minimizing area constraints. We carefully define
              layout structures, power distribution, and interconnect
              strategies to enhance design quality.
            </p>
          </div>
          <div className="bg-white p-12 rounded-2xl shadow-md">
            <div className='flex flex-row gap-4'>
                <img src={frame4} alt=""></img>
            <h2 className="text-xl font-semibold text-blue-600 ">Project Tapeout</h2></div>
            <p className="text-gray-600 mt-2 xl:text-base text-sm ">
              Our experts employ advanced placement and routing techniques to
              optimize timing, power consumption, and signal integrity. We use
              state-of-the-art tools to ensure smooth integration and high
              yield.
            </p>
          </div>
        </div>
        <div className="bg-[#EBF1FF] xl:p-8 p-4 rounded-2xl shadow-md text-center relative group">
  <div className="overflow-hidden rounded-lg">
    <img
      src={partnership}
      alt="Functional Design"
      className="w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>
  <div
    className="absolute inset-0 flex items-end justify-end p-16 text-blue-600 font-semibold text-sm cursor-pointer"
    onClick={() => navigate('/servicesPage')}
  >
    → Explore our services
  </div>
  <p className="absolute inset-0 flex items-center justify-center p-16 text-white font-semibold pointer-events-none text-center xl:text-base text-sm">
    Partner with us for seamless VLSI design solutions that drive innovation and performance. Contact us today to discuss your project requirements!
  </p>
</div>

      </div>
   

    {/* Call to Action Section */}
    <div className="  mt-20 bg-[#0a0a0af8] border border-[#333] rounded-xl p-10 shadow-lg">
              <div className="flex flex-col xl:flex-row items-center justify-between">
                <div className="xl:w-2/3 xl:pr-10">
                  <div className="bg-[#2D7BFD]/10 text-[#2D7BFD] text-sm font-semibold py-1.5 px-5 rounded-full inline-block mb-6">15+ Years of Excellence</div>
                  <h3 className="text-3xl xl:text-4xl font-bold text-white mb-5 tracking-tight">Ready to transform your technology vision?</h3>
                  <p className="text-[#647185] xl:text-base text-sm mb-10 xl:pr-8 leading-relaxed">
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
  )
}

export default Fullvlsi
