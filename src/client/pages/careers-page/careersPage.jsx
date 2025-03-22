import React from 'react';
import dot from "../../../assets/images/dotgrid.svg";
import backdropimage2 from "../../../assets/images/backdropimage2.svg";

function CareersPage() {
    return (
        <div>
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        {/* Background Image */}
        <img
          src={backdropimage2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
  
        {/* Faded Overlay using Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent -z-10"></div>
  
        {/* Content */}
        <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
          <div className="flex flex-col h-full justify-center">
            <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
              Shape Tomorrow with Your Talents
              <div className="text-white text-lg lg:text-xl 2xl:text-2xl font-normal xl:mt-8 mt-6">
                At Embedded Silicon, we don’t just design—we engineer the future.
                Join a Filipino-owned global leader where innovation meets opportunity.
              </div>
            </div>
          </div>
        </div>

       </div>
       <div className='flex flex-row text-black justify-center items-center mt-20'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='text-4xl font-bold'>Join a Culture of Excellence</div>
                <div className='text-[#4A5565] text-xl'>We invest in people, celebrate achievements, and create endless opportunities for success</div>

            </div>
        </div>

        <div className='flex flex-col text-black justify-center items-center mt-20'>
            <h1 className='text-6xl'>Explore by category</h1>
            <div className='grid grid-rows-1 grid-cols-4 justify-center items-center gap-4 mt-10'>
            <div className='flex flex-row bg-amber-300 p-4'>
                <div className='w-1/6'>
1
                </div>
                <div className='w-full'>
1
                </div>
            </div>
            <div>1</div>
            <div>1</div>
            <div>1</div>

            </div>
            
        </div>
        
      </div>
    );
  }
  
  
export default CareersPage;
