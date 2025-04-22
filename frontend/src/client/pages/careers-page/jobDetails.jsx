import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import successStory from "../../../assets/images/buildingSuccess.svg";

function JobDetails() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/jobs/${id}`);
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setError('Failed to fetch job details. Please try again later.');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">{error}</div>
    );
  }

  if (!job) {
    return (
      <div className="text-gray-500 text-center py-8">Job not found</div>
    );
  }

  return (
    <div className=''>
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        <img
          src={successStory}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/70 to-black/30 -z-10"></div>
        <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
          <div className="flex flex-col h-full justify-center">
            <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
              {job.title}
              <div className="text-white text-sm lg:text-base 2xl:text-2xl font-normal xl:mt-8 mt-6">
                {job.location} • Posted {formatDate(job.postDate)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto 2xl:p-0 lg:p-6 p-6 mt-20'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-semibold text-[#0B2B82]'>Job Description</h2>
            <p className='text-gray-700'>{job.description}</p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-semibold text-[#0B2B82]'>Qualifications</h2>
            <p className='text-gray-700'>{job.qualifications}</p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-semibold text-[#0B2B82]'>Experience Required</h2>
            <p className='text-gray-700'>{job.experienceRequired}</p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-semibold text-[#0B2B82]'>Schedule</h2>
            <p className='text-gray-700'>{job.schedule}</p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h2 className='text-2xl font-semibold text-[#0B2B82]'>Benefits</h2>
            <p className='text-gray-700'>{job.benefits}</p>
          </div>

          <div className='flex flex-row space-x-4'>
            <button 
              onClick={() => navigate(-1)}
              className='px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors cursor-pointer'
            >
              Back to Jobs
            </button>
            {job.jobLink ? (
              <a 
                href={job.jobLink}
                target="_blank"
                rel="noopener noreferrer"
                className='px-6 py-2 bg-[#002D9E] text-white rounded hover:bg-[#002080] transition-colors'
              >
                Apply Now
              </a>
            ) : (
              <button 
                className='px-6 py-2 bg-[#002D9E] text-white rounded hover:bg-[#002080] transition-colors'
              >
                Apply Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails; 