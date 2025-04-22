import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import JobList from './jobList'
import SuccessStoriesCMS from '../success-page/successStoriesCMS'

// Breadcrumb component for better organization and reusability
const Breadcrumb = ({ items, activeSection, setActiveSection }) => {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {items.map((item, index) => {
          // Last item - current page
          const isLast = index === items.length - 1;
          
          // Check if this is a section toggle item
          const isSectionToggle = item.section !== undefined;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="h-5 w-5 text-gray-400 mx-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              {isSectionToggle ? (
                <button
                  onClick={() => setActiveSection(item.section)}
                  className={`${
                    activeSection === item.section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-500 hover:text-blue-500'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ) : isLast ? (
                <span className="text-gray-800 font-medium">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.href} 
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

function CMS() {
  const [jobData, setJobData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    postDate: '',
    jobType: '',
    benefits: '',
    schedule: '',
    experienceRequired: '',
    qualifications: '',
    jobLink: ''
  });

  const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('post'); // 'post' or 'manage'
  const [activeContent, setActiveContent] = useState('jobs'); // 'jobs' or 'stories'
  const [editingJob, setEditingJob] = useState(null); // Track job being edited
  const location = useLocation();
  const navigate = useNavigate();

  const jobCategories = [
    "Engineering & Technical Roles",
    "Software & IT",
    "Business & Management",
    "Manufacturing & Production",
    "Research & Development"
  ];

  // Generate breadcrumb items based on current content area and section
  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Careers', href: '/careersPage' }
    ];

    // Add specific items based on active content section
    if (activeContent === 'jobs') {
      items.push({ label: 'Post New Job', section: 'post' });
      items.push({ label: 'Manage Jobs', section: 'manage' });
    } else if (activeContent === 'stories') {
      items.push({ label: 'Post Success Story', section: 'post' });
      items.push({ label: 'Manage Success Stories', section: 'manage' });
    }

    return items;
  };

  // Handle click on website content area
  const handleContentClick = (contentType) => {
    setActiveContent(contentType);
    if (contentType === 'jobs') {
      setActiveSection('post'); // Default to post when switching to jobs
    }
  };

  // Handle job edit request from JobList
  const handleEditJob = (job) => {
    // Format the date to YYYY-MM-DD for the input field
    const formattedDate = job.postDate ? new Date(job.postDate).toISOString().split('T')[0] : '';
    
    setJobData({
      title: job.title || '',
      category: job.category || '',
      description: job.description || '',
      location: job.location || '',
      postDate: formattedDate,
      jobType: job.jobType || '',
      benefits: job.benefits || '',
      schedule: job.schedule || '',
      experienceRequired: job.experienceRequired || '',
      qualifications: job.qualifications || '',
      jobLink: job.jobLink || ''
    });
    
    setEditingJob(job);
    setActiveContent('jobs');
    setActiveSection('post');
  };

  // Reset form function
  const resetJobForm = () => {
    setJobData({
      title: '',
      category: '',
      description: '',
      location: '',
      postDate: '',
      jobType: '',
      benefits: '',
      schedule: '',
      experienceRequired: '',
      qualifications: '',
      jobLink: ''
    });
    setEditingJob(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formattedJobData = {
        title: jobData.title.trim(),
        category: jobData.category,
        description: jobData.description.trim(),
        location: jobData.location.trim(),
        postDate: new Date(jobData.postDate),
        jobType: jobData.jobType,
        schedule: jobData.schedule.trim(),
        benefits: jobData.benefits.trim(),
        experienceRequired: jobData.experienceRequired.trim(),
        qualifications: jobData.qualifications.trim(),
        jobLink: jobData.jobLink.trim()
      };

      if (!formattedJobData.title || !formattedJobData.category || !formattedJobData.description || 
          !formattedJobData.location || !formattedJobData.postDate || !formattedJobData.jobType) {
        throw new Error('Please fill in all required fields');
      }

      let response;
      
      if (editingJob) {
        // Update existing job
        response = await axios.put(`${apiUrl}/jobs/${editingJob._id}`, formattedJobData);
        if (response.status === 200) {
          alert('Job updated successfully!');
          resetJobForm();
        }
      } else {
        // Create new job
        response = await axios.post(`${apiUrl}/jobs`, formattedJobData);
        if (response.status === 201) {
          alert('Job posted successfully!');
          resetJobForm();
        }
      }
    } catch (error) {
      console.error('Error saving job:', error);
      setError(error.response?.data?.error || 'Failed to save job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Content Management System</h1>
        
        {/* Admin Navigation */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Website Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              className={`p-4 border rounded-lg ${activeContent === 'jobs' ? 'bg-blue-100 border-blue-300' : 'bg-blue-50 hover:bg-blue-100'} transition cursor-pointer`}
              onClick={() => handleContentClick('jobs')}
            >
              <h3 className="font-semibold text-blue-700 mb-2">Job Listings</h3>
              <p className="text-sm text-gray-600 mb-3">Manage job postings for the careers page.</p>
              <div className="mt-2 flex space-x-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    setActiveSection('post');
                  }} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeSection === 'post' && activeContent === 'jobs'
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-50'
                  } transition-colors duration-200`}
                >
                  Post Jobs
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    setActiveSection('manage');
                  }} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeSection === 'manage' && activeContent === 'jobs'
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-50'
                  } transition-colors duration-200`}
                >
                  Manage Jobs
                </button>
              </div>
            </div>
            
            <div 
              className={`p-4 border rounded-lg ${activeContent === 'stories' ? 'bg-green-100 border-green-300' : 'bg-green-50 hover:bg-green-100'} transition cursor-pointer`}
              onClick={() => handleContentClick('stories')}
            >
              <h3 className="font-semibold text-green-700 mb-2">Success Stories</h3>
              <p className="text-sm text-gray-600 mb-3">Manage case studies and success stories.</p>
              <div className="mt-2 flex space-x-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    setActiveContent('stories');
                    setActiveSection('post');
                  }} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeSection === 'post' && activeContent === 'stories'
                      ? 'bg-green-600 text-white' 
                      : 'text-green-600 hover:bg-green-50'
                  } transition-colors duration-200`}
                >
                  Post Story
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    setActiveContent('stories');
                    setActiveSection('manage');
                  }} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeSection === 'manage' && activeContent === 'stories'
                      ? 'bg-green-600 text-white' 
                      : 'text-green-600 hover:bg-green-50'
                  } transition-colors duration-200`}
                >
                  Manage Stories
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Breadcrumbs with custom component */}
        <Breadcrumb 
          items={getBreadcrumbItems()} 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
        />

        {activeContent === 'jobs' && activeSection === 'post' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingJob ? 'Edit Job' : 'Post New Job'}
            </h2>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={jobData.title}
                  onChange={(e) => setJobData({...jobData, title: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={jobData.category}
                  onChange={(e) => setJobData({...jobData, category: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={jobData.description}
                  onChange={(e) => setJobData({...jobData, description: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={jobData.location}
                  onChange={(e) => setJobData({...jobData, location: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Post Date</label>
                <input
                  type="date"
                  value={jobData.postDate}
                  onChange={(e) => setJobData({...jobData, postDate: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Job Type</label>
                <select
                  value={jobData.jobType}
                  onChange={(e) => setJobData({...jobData, jobType: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select job type</option>
                  <option value="FULL TIME">Full Time</option>
                  <option value="PART TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERNSHIP">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Schedule</label>
                <input
                  type="text"
                  value={jobData.schedule}
                  onChange={(e) => setJobData({...jobData, schedule: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Benefits</label>
                <textarea
                  value={jobData.benefits}
                  onChange={(e) => setJobData({...jobData, benefits: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Experience Required</label>
                <textarea
                  value={jobData.experienceRequired}
                  onChange={(e) => setJobData({...jobData, experienceRequired: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Qualifications</label>
                <textarea
                  value={jobData.qualifications}
                  onChange={(e) => setJobData({...jobData, qualifications: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Job Link</label>
                <input
                  type="url"
                  value={jobData.jobLink}
                  onChange={(e) => setJobData({...jobData, jobLink: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="https://example.com/apply"
                />
              </div>

              <div className="flex justify-end space-x-3">
                {editingJob && (
                  <button
                    type="button"
                    onClick={resetJobForm}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel Edit
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isSubmitting ? 'Saving...' : (editingJob ? 'Update Job' : 'Post Job')}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {activeContent === 'jobs' && activeSection === 'manage' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Jobs</h2>
            <JobList onEditJob={handleEditJob} />
          </div>
        )}
        
        {activeContent === 'stories' && activeSection === 'post' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Post New Success Story</h2>
            <SuccessStoriesCMS initialSection="post" />
          </div>
        )}
        
        {activeContent === 'stories' && activeSection === 'manage' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Success Stories</h2>
            <SuccessStoriesCMS initialSection="manage" />
          </div>
        )}
      </div>
    </div>
  )
}

export default CMS