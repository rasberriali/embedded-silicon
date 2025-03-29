import {useEffect} from 'react'
import backdropimage2 from "../../../assets/images/backdropimage2.svg";

function JobCategories() {
     useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    
  
  return (
    <div className=''>
    <div className="relative font-inter xl:h-[60vh] h-[30vh]">
           {/* Background Image */}
           <img
             src={backdropimage2}
             alt=""
             className="absolute inset-0 w-full h-full object-cover -z-10"
           />
     
           {/* Faded Overlay using Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/70 to-black/30 -z-10"></div>
     
           {/* Content */}
           <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
             <div className="flex flex-col h-full justify-center">
               <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
                 Shape Tomorrow with Your Talents
                 <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                   At Embedded Silicon, we don't just design—we engineer the future.
                   Join a Filipino-owned global leader where innovation meets opportunity.
                 </div>
               </div>
             </div>
           </div>
   
          </div>
          <div className='max-w-screen-xl mx-auto 2xl:p-0 lg:p-6 p-6 mt-20'>
            <div className='flex flex-row justify-between items-center font-inter'>
                <div className='text-3xl font-semibold text-[#0B2B82]'>
                ENGINEERING & TECHNICAL ROLES
                </div>
                <div className='flex flex-row w-1/6 justify-between items-center btextg-[#0B2B82] '>
                    <div>
                        Sort Jobs
                    </div>
                    <div className='bg-[#002D9E] py-2 px-10 text-white'>
                        Latest
                    </div>

                </div>

            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col w-full border-2 p-4 mt-8 border-[#3B82F6]'>
                    <div className='mb-2 text-2xl text-[#0325CE] font-medium font-inter'>
                        Developer
                    </div>
                    <span className='text-[#3D589B] font-semibold text-sm'>
                        Alabang Muntinlupa City
                    </span>
                    <span className='text-[#3D589B] font-normal text-sm'>
                        Posted 03/19/2025
                    </span>

                </div>

                <div className='flex flex-col w-full border-2 p-4 mt-8 border-[#3B82F6]'>
                    <div className='mb-2 text-2xl text-[#0325CE] font-medium font-inter'>
                        Developer
                    </div>
                    <span className='text-[#3D589B] font-semibold text-sm'>
                        Alabang Muntinlupa City
                    </span>
                    <span className='text-[#3D589B] font-normal text-sm'>
                        Posted 03/19/2025
                    </span>

                </div>

                <div className='flex flex-col w-full border-2 p-4 mt-8 border-[#3B82F6]'>
                    <div className='mb-2 text-2xl text-[#0325CE] font-medium font-inter'>
                        Developer
                    </div>
                    <span className='text-[#3D589B] font-semibold text-sm'>
                        Alabang Muntinlupa City
                    </span>
                    <span className='text-[#3D589B] font-normal text-sm'>
                        Posted 03/19/2025
                    </span>

                </div>

                

            </div>

          </div>
    </div>
  )
}

export default JobCategories