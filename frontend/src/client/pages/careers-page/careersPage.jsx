

// ***************************************************************************** ::

// CODED BY:  ALYSA JULIANA M. EMILIO
// GITHUB:    RASBERRIALI / ALI-MANGO

// ***************************************************************************** ::

import {useEffect, useState} from 'react';
import successStory from "../../../assets/images/buildingSuccess.svg";
import servicesCarousel from "../../../assets/images/servicesCarousel.svg";
import servicesCarousel2 from "../../../assets/images/servicesCarousel2.svg";
import servicesCarousel3 from "../../../assets/images/servicesCarousel3.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CareersPage() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const [jobCounts, setJobCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobCounts();
  }, []);

  const fetchJobCounts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/jobs`);
      const jobs = response.data;
      
      const counts = jobs.reduce((acc, job) => {
        acc[job.category] = (acc[job.category] || 0) + 1;
        return acc;
      }, {});

      setJobCounts(counts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job counts:', error);
      setLoading(false);
    }
  };

  const categories = [
    { name: "Engineering & Technical Roles", jobs: jobCounts["Engineering & Technical Roles"] || 0, path: '/jobCategories' },
    { name: "Software & IT", jobs: jobCounts["Software & IT"] || 0, path: '/jobCategories' },
    { name: "Business & Management", jobs: jobCounts["Business & Management"] || 0, path: '/jobCategories' },
    { name: "Manufacturing & Production", jobs: jobCounts["Manufacturing & Production"] || 0, path: '/jobCategories' },
    { name: "Research & Development", jobs: jobCounts["Research & Development"] || 0, path: '/jobCategories' },
  ];

  const featuredJobs = [
    { title: "Digital Design Engineers",  type: "FULL TIME" },
    { title: "Senior Design Engineer", type: "FULL TIME" },
    { title: "Junior Accounting", type: "FULL TIME" },
    { title: "Senior DevOps Engineer", type: "FULL TIME" },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    servicesCarousel,
    servicesCarousel2,
    servicesCarousel3,
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [current]);

  const carouselContent = [
    {
      image: servicesCarousel,
      title: "Commitment to a People-First Culture",
      description: "At Embedded Silicon, our employees are our greatest asset. We foster a culture of challenge, respect, and recognition, prioritizing your well-being and growth with flexible working arrangements for a harmonious work-life balance."
    },
    {
      image: servicesCarousel2,
      title: "Opportunities for Advancement",
      description: "At Embedded Silicon, we provide dynamic career growth opportunities. Our comprehensive training for fresh grads nurtures talents, promoting active engagement. Empowerment is key as we support team members in evolving into leaders in their roles."
    },
    {
      image: servicesCarousel3,
      title: "Rewarding Excellence Always",
      description: "At Embedded Silicon, we prioritize our employees with a competitive compensation package, including bonuses, allowances, HMO coverage, and perks to recognize and reward exceptional contributions."
    }
  ];

  return (
    <div>
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        <img
          src={successStory}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent -z-10"></div>
  
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

       <div className=' max-w-screen-xl mx-auto flex flex-col text-black justify-center items-center mt-20'>
            <div className='flex flex-col justify-center items-center gap-4 p-8'>
                <div className='xl:text-4xl text-2xl font-bold text-[#0B2B82]'>Join a Culture of <span className="text-blue-600">Excellence</span></div>
                <div className='text-[#4A5565] xl:text-xl text-base text-center max-w-2xl'>We invest in people, celebrate achievements, and create endless opportunities for success</div>

            </div>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden  group   ">
      <div 
        className="flex transition-transform duration-700 ease-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselContent.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 transition-opacity duration-500
              md:opacity-0 md:group-hover:opacity-100 opacity-100`} 
            />
            <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500
              md:translate-y-8 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 opacity-100`}
            >
              <h3 className="text-2xl font-bold mb-3 transform transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                {item.title}
              </h3>
              <p className="text-base text-gray-200 leading-relaxed max-w-3xl transform transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full 
          flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover:opacity-100
          hover:shadow-2xl backdrop-blur-sm"
        disabled={isAnimating}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full 
          flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover:opacity-100
          hover:shadow-2xl backdrop-blur-sm"
        disabled={isAnimating}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {carouselContent.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrent(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
            className={`border border-blue-500 xl:p-8 p-4 rounded-lg xl:w-70 xl:h-full h-30 text-center hover:bg-blue-50 transition cursor-pointer`}
            onClick={() => navigate(category.path, { state: { category: category.name } })}
          >
            <div className="xl:text-4xl text-base mb-2">{category.icon}</div>
            <h3 className="xl:text-xl text-sm font-semibold text-blue-600">{category.name}</h3>
            <p className="text-gray-600 xl:text-base text-xs">
              {loading ? 'Loading...' : `${category.jobs} Jobs Available`}
            </p>
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
            <div className="flex items-center text-blue-600">
              <span className="xl:text-2xl text-lg">{job.icon}</span>
              <span className="xl:text-sm font-medium">{job.type}</span>
            </div>
            <h3 className="xl:text-lg text-base font-semibold mt-2">{job.title}</h3>
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