import {useEffect, useState} from 'react'
import axios from 'axios'
import successStory from "../../../assets/images/buildingSuccess2.svg";
import handshake from "../../../assets/images/handshake.png";
import automotive from "../../../assets/images/automotive.svg"
import medDevices from "../../../assets/images/medDevice.svg"
import semicon from "../../../assets/images/semicon.svg";
import { useNavigate, useLocation  } from 'react-router-dom';

function SuccessStories() {
  const [successStoriesData, setSuccessStoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Default image mapping based on category
  const categoryImageMap = {
    'ASIC Design': medDevices,
    'Verification': automotive,
    'Healthcare': medDevices,
    'Automotive': automotive,
    'Education': semicon,
    'R&D': semicon,
    'Semiconductor': semicon
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSuccessStories();
  }, []);

  const fetchSuccessStories = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/success-stories');
      if (response.data && response.data.length > 0) {
        setSuccessStoriesData(response.data);
      } else {
        // Fallback to initial static data if no stories from backend
        setSuccessStoriesData([
          {
            id: 1,
            title: "Leading ASIC Design for Global Tech Giant",
            excerpt: "Embedded Silicon successfully developed a custom ASIC solution that reduced power consumption by 40% while improving performance by 25% for a Fortune 500 technology company.",
            content: "Our team of expert engineers worked closely with the client to understand their specific requirements and challenges. Through innovative design techniques and state-of-the-art tools, we created a custom ASIC solution that significantly outperformed previous generations. The project was completed ahead of schedule and has since been deployed in millions of devices worldwide.",
            image: medDevices,
            author: "Engineering Team",
            date: "March 15, 2022",
            category: "ASIC Design"
          },
          {
            id: 2,
            title: "Innovative SoC for Medical Devices",
            excerpt: "Our team engineered a specialized System-on-Chip that enabled next-generation medical monitoring devices with 30% smaller form factor and extended battery life.",
            content: "Healthcare technology demands the highest standards of reliability and performance. Our specialized SoC design incorporated advanced power management features while maintaining medical-grade reliability standards. The resulting chip has helped our client revolutionize portable medical monitoring technology, making critical care more accessible worldwide.",
            image: medDevices,
            author: "Medical Solutions Division",
            date: "November 8, 2021",
            category: "Healthcare"
          },
          {
            id: 3,
            title: "Semiconductor Training Program Boosts Local Talent",
            excerpt: "Developed and implemented a comprehensive training program for over 200 engineers, enhancing the local semiconductor talent ecosystem in the Philippines.",
            content: "As part of our commitment to growing the semiconductor industry in the Philippines, we partnered with government and educational institutions to create an intensive training program. The curriculum covered advanced VLSI design, verification methodologies, and physical design techniques. Graduates of the program have gone on to secure positions in leading semiconductor companies or start their own ventures.",
            image: semicon,
            author: "Training & Development",
            date: "January 20, 2023",
            category: "Education"
          },
          {
            id: 4,
            title: "Verification Excellence Award for Automotive Chip",
            excerpt: "Our verification methodology led to the successful first-pass silicon for a complex automotive chip, saving our client millions in re-spin costs.",
            content: "Automotive applications require rigorous verification to ensure safety and reliability. Our team developed a comprehensive verification strategy that included UVM-based testbenches, formal verification, and hardware acceleration. The result was a flawless first silicon implementation that passed all certification requirements. This achievement earned us the industry's Verification Excellence Award and strengthened our position as a trusted partner for automotive semiconductor solutions.",
            image: automotive,
            author: "Verification Team",
            date: "August 5, 2022",
            category: "Verification"
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching success stories:', error);
      setError('Failed to load success stories');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to determine image for a story
  const getStoryImage = (story) => {
    if (story.image && !story.image.includes('undefined')) {
      return story.image;
    }
    
    return categoryImageMap[story.category] || medDevices;
  };

  return (
    <div className='font-inter'>
        <div className="relative font-inter xl:h-[60vh] h-[30vh]">
                {/* Background Image */}
                <img
                  src={successStory}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                />
          
                {/* Faded Overlay using Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 -z-10"></div>
          
                {/* Content */}
                <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
                  <div className="flex flex-col h-full justify-center">
                    <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
                      Explore our Success Stories
                      <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                        At Embedded Silicon, we don't just design—we engineer the future.
                        Join a Filipino-owned global leader where innovation meets opportunity.
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : (
          <div className="max-w-screen-xl mx-auto px-4 py-16 bg-white mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStoriesData.map((story) => (
                <div key={story._id || story.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 w-full relative">
                    <img 
                      src={getStoryImage(story)} 
                      alt={story.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      By {story.author || 'Embedded Silicon Team'} • {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-gray-700 line-clamp-3">{story.excerpt}</p>
                  </div>
                  <div className="px-6 pb-6" onClick={() => navigate('/stories', { state: { storyId: story._id || story.id } })}>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default SuccessStories