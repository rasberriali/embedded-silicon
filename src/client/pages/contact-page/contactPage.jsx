import {useEffect} from 'react'
import madrigal from "../../../assets/images/madrigal.jpg"
import dropdown from "../../../assets/images/dropdown.svg"
import email from "../../../assets/images/email-icon.svg"
import location from "../../../assets/images/location-icon.svg"
import phone from "../../../assets/images/phone-icon.svg"
import building from "../../../assets/images/building.jpg"

function ContactPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter mt-6 lg:mt-10 2xl:mt-20'>
        <div className='flex xl:flex-row flex-col'>
            <div className='xl:w-1/2 w-full flex flex-col gap-16  xl:pr-14'>
            <div className='text-5xl font-semibold text-[#040404]'>
                Let's get in touch!
            </div>
            <img src={building} alt="" className='rounded-4xl h-1/ '/>

            <div className='grid grid-cols-2 grid-rows-2 -space-y-10'>
              <div className='flex flex-row '>
                <div className='w-1/6  flex flex-row justify-center '>
                <img src={email} alt="" className='h-8 w-8'></img>
                </div>

                <div className='w-1/2 flex flex-col'>
                <div className='font-semibold text-sm'>Email</div>
                <div className='text-[#647185] text-xs'>info@esilicontech.com</div>
                
                </div>

              </div>
              <div className='flex flex-row '>
                <div className='w-1/6  flex flex-row justify-center '>
                <img src={phone} alt="" className='h-8 w-8'></img>
                </div>

                <div className='w-1/2 flex flex-col'>
                <div className='font-semibold text-sm'>Phone</div>
                <div className='text-[#647185] text-xs'>+63 (02) 8660-4748</div>
                <div className='text-[#647185] text-xs'>+63 920-911-0801</div>
                
                </div>

              </div>

              <div className='flex flex-row'>
                <div className='w-1/6  flex flex-row justify-center '>
                <img src={location} alt="" className='h-8 w-8'></img>
                </div>

                <div className='w-full flex flex-col  '>
                <div className='font-semibold text-sm'>Location</div>
                <div className='text-[#404040] font-semibold text-sm mt-4 mb-4 '>Alabang Office</div>
                <div className='text-[#647185] text-xs'>Unit 601 Richville Corporate Tower,<br/>
                                                          Alabang - Zapote Road, Madrigal Business Park,
                                                          Ayala Alabang, Muntinlupa City 1780 PH</div>
                </div>

              </div>

              <div className='flex flex-row  pl-13'>
                <div className='w-full flex flex-col gap-3 justify-end'>
                <div className='font-semibold text-sm text-[#404040]'>Rizal office</div>
                <div className='text-[#647185] text-xs'>B21 L9 Brazilianite St.,<br/>
                                                          Golden City Subdivision,<br/>
                                                          Taytay, Province of Rizal 1920 PH</div>
                
                </div>
              </div>

            </div>
            </div>

            {/* right side */}
            <div className='xl:w-1/2 w-full xl:px-14 xl:mt-0 mt-34'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-3xl '>Fill out the form below to get started</h2>
              <div className='text-[#647185] text-base font-normal leading-5 mb-8'>Let us know about your project and we will get back to you with<br/> our
              proposal and timeline.</div>

              <form className="space-y-6">
              <div className='space-y-2'>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className='space-y-2'>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='space-y-2'>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='space-y-2'>
                <label className="block text-gray-700 font-medium">How can we help you?</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
            </form>
            


              <h3 className='font-semibold text-sm'>
                Expected services
              </h3>
              <div className='grid xl:grid-cols-3 grid-cols-2 grid-rows-2 gap-2 text-xs mt-6 '>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>Full Custom Layout</div>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>Full Chip Integration</div>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>Analog IP Blocks</div>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>Full VLSI Design</div>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>Automated PnR</div>
                <div className='text-center  p-2 border rounded-sm border-[#E0E0E0]'>UVM Testbenches</div>
              </div>
              <div className='flex flex-row justify-end gap-2 text-sm font-medium hover:text-gray-600 cursor-pointer'>See all
                <img src={dropdown} alt="" className=''></img>
              </div>
              <div className='flex flex-row justify-center items-center w-full p-2 bg-[#2d79fd] hover:bg-[#2d79fdb2] text-base font-semibold rounded-[10px] text-white mt-8'>Submit</div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default ContactPage
