import {useEffect, useState} from 'react'
import newsBg from "../../../assets/images/newsBg.svg";
import { useNavigate, useLocation  } from 'react-router-dom';
import asicImage from "../../../assets/images/asicBg.svg"
import analogImage2 from "../../../assets/images/analogImage2.svg"
import radpidImage from "../../../assets/images/rapidImage.svg"



function NewsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
}, []);

  return (
    <div className='font-inter'>
        <div className="relative font-inter xl:h-[50vh] h-[40vh]">
            <img
              src={newsBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/10 to-blue-500/20 -z-10"></div>
        </div>

        <div className='mx-auto max-w-screen-xl -mt-20 relative z-10 font-inter 2xl:p-0 lg:p-6 p-6'>
                <div className='flex flex-row xl:p-8 p-4 bg-gray-100 shadow-lg xl:w-3xl border-t-4 border-blue-800'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='xl:text-lg text-sm font-bold text-blue-700'>TOP NEWS</h3>
                        <div className='xl:text-4xl text-xl font-bold xl:leading-11 leading-7'>
                            Embedded Silicon Expands Into RF IC Design Services
                        </div>
                    </div>
                </div>
        </div>

        <div className='flex flex-row max-w-screen-xl mx-auto 2xl:p-0 lg:p-6 p-6 xl:mt-30 mt-6'>
          <div className='grid xl:grid-cols-3 grid-cols-1  xl:grid-rows-1 gap-8'>
            <div className=' flex flex-col gap-4 p-6 bg-gray-100 shadow-2xl cursor-pointer' onClick={() => navigate('/newsDetails')}>
              <img src={radpidImage} alt="" className=''>
              </img>
              <h5 className=" text-xs font-medium text-gray-500">April 15, 2025</h5>
              <h3 className='font-bold text-lg'>
              Embedded Silicon joins MathWorks Connections Program as System Integrator Service Member
              </h3>
              <p className='text-sm font-light'>
              Embedded Silicon, a global embedded and IC solutions and services company, has become a System Integrator Service member of the MathWorks Connections Program. Th
              </p>
            </div>
            <div className=' flex flex-col gap-4 p-6 bg-gray-100 shadow-2xl'>
              <img src={asicImage} alt="" className=''>
              </img>
              <h5 className=" text-xs font-medium text-gray-500">April 15, 2025</h5>
              <h3 className='font-bold text-lg'>
              Embedded Silicon joins MathWorks Connections Program as System Integrator Service Member
              </h3>
              <p className='text-sm font-light'>
              Embedded Silicon, a global embedded and IC solutions and services company, has become a System Integrator Service member of the MathWorks Connections Program. Th
              </p>
            </div>
            <div className=' flex flex-col gap-4 p-6 bg-gray-100 shadow-2xl'>
              <img src={analogImage2} alt="" className=''>
              </img>
              <h5 className=" text-xs font-medium text-gray-500">April 15, 2025</h5>
              <h3 className='font-bold text-lg'>
              Embedded Silicon joins MathWorks Connections Program as System Integrator Service Member
              </h3>
              <p className='text-sm font-light'>
              Embedded Silicon, a global embedded and IC solutions and services company, has become a System Integrator Service member of the MathWorks Connections Program. Th
              </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default NewsPage