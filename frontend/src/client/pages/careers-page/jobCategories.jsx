import {useEffect, useState} from 'react'
import successStory from "../../../assets/images/buildingSuccess.svg";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function JobCategories() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('latest');
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || "Engineering & Technical Roles";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
  }, [category]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/jobs');
      // Filter jobs by category and sort by date
      const filteredJobs = response.data
        .filter(job => job.category === category)
        .sort((a, b) => {
          if (sortBy === 'latest') {
            return new Date(b.postDate) - new Date(a.postDate);
          }
          return new Date(a.postDate) - new Date(b.postDate);
        });
      setJobs(filteredJobs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch jobs. Please try again later.');
      setLoading(false);
    }
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    fetchJobs();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className=''>
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        {/* Background Image */}
        <img
          src={successStory}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
    
        {/* Faded Overlay using Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent -z-10"></div>
    
        {/* Content */}
        <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
          <div className="flex flex-col h-full justify-center">
            <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
              {category}
              <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                Explore opportunities in {category.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto 2xl:p-0 lg:p-6 p-6 mt-20'>
        <div className='flex flex-row justify-between items-center font-inter'>
          <div className='text-3xl font-semibold text-[#0B2B82]'>
            {category}
          </div>
          <div className='flex flex-row w-1/4  justify-between items-center text-[#0B2B82]'>
            <div>
              Sort Jobs:
            </div>
            <div 
              className={`py-2 px-8 text-white cursor-pointer transition-colors ${
                sortBy === 'latest' ? 'bg-[#002D9E]' : 'bg-gray-500 hover:bg-gray-600'
              }`}
              onClick={() => handleSortChange('latest')}
            >
              Latest
            </div>
            <div 
              className={`py-2 px-8 text-white cursor-pointer transition-colors ${
                sortBy === 'oldest' ? 'bg-[#002D9E]' : 'bg-gray-500 hover:bg-gray-600'
              }`}
              onClick={() => handleSortChange('oldest')}
            >
              Oldest
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : jobs.length === 0 ? (
            <div className="text-gray-500 text-center py-8">No jobs available in this category</div>
          ) : (
            jobs.map((job, index) => (
              <div 
                key={index} 
                className='flex flex-col w-full border-2 p-4 mt-8 border-[#3B82F6] hover:bg-blue-50 transition-colors cursor-pointer rounded-2xl'
                onClick={() => navigate(`/careers/job/${job._id}`)}
              >
                <div className='mb-2 text-2xl text-[#0325CE] font-medium font-inter'>
                  {job.title}
                </div>
                <span className='text-[#3D589B] font-semibold text-sm'>
                  {job.location}
                </span>
                <span className='text-[#3D589B] font-normal text-sm'>
                  Posted {formatDate(job.postDate)}
                </span>
                <div className='mt-2'>
                  <span className='text-sm text-blue-600 font-medium'>{job.jobType}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCategories;