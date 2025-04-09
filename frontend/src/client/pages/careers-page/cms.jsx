import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import JobList from './jobList'

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('post'); // 'post' or 'manage'

  const jobCategories = [
    "Engineering & Technical Roles",
    "Software & IT",
    "Business & Management",
    "Manufacturing & Production",
    "Research & Development"
  ];

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

      const response = await axios.post('http://localhost:5000/jobs', formattedJobData);
      
      if (response.status === 201) {
        alert('Job posted successfully!');
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
      }
    } catch (error) {
      console.error('Error posting job:', error);
      setError(error.response?.data?.error || 'Failed to post job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link to="/careersPage" className="text-gray-500 hover:text-gray-700">
                  Careers
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <button 
                  onClick={() => setActiveSection('post')} 
                  className={`${activeSection === 'post' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Post New Job
                </button>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <button 
                  onClick={() => setActiveSection('manage')} 
                  className={`${activeSection === 'manage' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Manage Jobs
                </button>
              </li>
            </ol>
          </nav>
        </div>

        {activeSection === 'post' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Post New Job</h2>
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

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isSubmitting ? 'Posting...' : 'Post Job'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Job List Section - Only shown when activeSection is 'manage' */}
        {activeSection === 'manage' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Jobs</h2>
            <JobList />
          </div>
        )}
      </div>
    </div>
  );
}

export default CMS;