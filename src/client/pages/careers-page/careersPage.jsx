import {useEffect, useState} from 'react';
import dot from "../../../assets/images/dotgrid.svg";
import backdropimage2 from "../../../assets/images/backdropimage2.svg";
import servicesCarousel from "../../../assets/images/servicesCarousel.svg";
import servicesCarousel2 from "../../../assets/images/servicesCarousel2.svg";
import servicesCarousel3 from "../../../assets/images/servicesCarousel3.svg";

function CareersPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const categories = [
    { name: " Digital Design Engineer", icon: "📐", jobs: 5 },
    { name: "Embedded System Engineer", icon: "📊", jobs: 5 },
    { name: "Layout Engineer", icon: "🔧", jobs: 5 },
    { name: "Finance", icon: "💳", jobs: 5 },
  ];

  const featuredJobs = [
    { title: "Digital Design Engineers", icon: "📱", type: "FULL TIME" },
    { title: "Senior Design Engineer", icon: "🎨", type: "FULL TIME" },
    { title: "Junior Accounting", icon: "📊", type: "FULL TIME" },
    { title: "Senior DevOps Engineer", icon: "✍️", type: "FULL TIME" },
  ];

  const images = [
    servicesCarousel,
    servicesCarousel2,
    servicesCarousel3,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/70 to-black/30 -z-10"></div>
  
        {/* Content */}
        <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
          <div className="flex flex-col h-full justify-center">
            <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
              Shape Tomorrow with Your Talents
              <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                At Embedded Silicon, we don’t just design—we engineer the future.
                Join a Filipino-owned global leader where innovation meets opportunity.
              </div>
            </div>
          </div>
        </div>

       </div>

       <div className=' max-w-screen-xl mx-auto flex flex-col text-black justify-center items-center mt-20'>
            <div className='flex flex-col justify-center items-center gap-4 p-8'>
                <div className='xl:text-4xl text-2xl font-bold text-[#0B2B82]'>Join a Culture of <span className="text-blue-600">Excellence</span></div>
                <div className='text-[#4A5565] xl:text-xl text-base text-center'>We invest in people, celebrate achievements, and create endless opportunities for success</div>

            </div>
            <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ▶
      </button>
    </div>
        </div>

        <div className=' max-w-screen-xl mx-auto flex flex-col text-black mt-20 p-6  '>
        <h2 className="text-5xl font-bold text-[#0B2B82]">
        Explore by <span className="text-blue-600">category</span>
      </h2>
          <div className="py-10">
      <div className="mt-4 grid xl:grid-cols-4 grid-cols-2 justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-blue-500 xl:p-8 p-4 rounded-lg xl:w-70 xl:h-full h-30 text-center hover:bg-blue-50 transition"
          >
            <div className="xl:text-4xl text-base mb-2">{category.icon}</div>
            <h3 className="xl:text-xl text-sm font-semibold text-blue-600">{category.name}</h3>
            <p className="text-gray-600 xl:text-base text-xs ">{category.jobs} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
        </div>


        <div className=' max-w-screen-xl mx-auto flex flex-col text-black justify-center p-6'>
        <h2 className="text-5xl font-bold text-[#0B2B82] mt-12">
        Featured <span className="text-blue-600">Jobs</span>
        <a href="#" className="text-sm text-blue-500 ml-4">Browse All →</a>
      </h2>
      <div className="mt-14 grid xl:grid-cols-4 grid-cols-2 justify-center gap-6 flex-wrap">
        {featuredJobs.map((job, index) => (
          <div
            key={index}
            className="border xl:p-8 p-4 rounded-lg xl:w-70 text-left hover:bg-blue-50 transition"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <span className="xl:text-2xl text-lg">{job.icon}</span>
              <span className="xl:text-sm font-medium">{job.type}</span>
            </div>
            <h3 className="xl:text-lg text-base font-semibold mt-2">{job.title}</h3>
            <p className="text-gray-600 text-sm mt-1 hidden md:block">
              Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
            </p>
            <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
              More Details →
            </a>
          </div>
        ))}
      </div>
        </div>
      </div>
    );
  }
  
  
export default CareersPage;
