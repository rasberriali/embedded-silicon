import React, { useState } from 'react'

function CMS() {
  const [jobData, setJobData] = useState({
    title: '',
    category: '',
    subCategory: '',
    description: '',
    location: '',
    postDate: '',
    jobType: '',
    benefits: '',
    schedule: '',
    experience: '',
    qualifications: ''
  })

  const jobCategories = {
    'Engineering & Technical Roles': [
      'Design Engineer',
      'Verification Engineer',
      'Firmware Engineer',
      'Embedded Systems Engineer',
      'Test Engineer',
      'Process Engineer',
      'Failure Analysis Engineer',
      'Packaging Engineer',
      'RF Engineer'
    ],
    'Manufacturing & Production': [
      'Fab Engineer',
      'Equipment Engineer',
      'Production Operator',
      'Yield Engineer'
    ],
    'Research & Development (R&D)': [
      'Materials Scientist',
      'Device Engineer',
      'Photonics Engineer'
    ],
    'Software & IT': [
      'EDA Engineer',
      'Software Engineer',
      'IT Support & DevOps'
    ],
    'Business & Management': [
      'Project Manager',
      'Supply Chain Manager',
      'Sales & Marketing',
      'Finance & HR'
    ]
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setJobData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(jobData)
  }

  return (
    <div className='max-w-screen-xl mx-auto p-6'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mb-8'>Job Posting Form</h1>
        
        <form onSubmit={handleSubmit} className='w-full max-w-3xl space-y-6'>
          {/* Job Title and Category */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-2'>Job Title</label>
              <input
                type="text"
                name="title"
                value={jobData.title}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Job Category</label>
              <select
                name="category"
                value={jobData.category}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              >
                <option value="">Select Category</option>
                {Object.keys(jobCategories).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sub Category */}
          {jobData.category && (
            <div>
              <label className='block text-sm font-medium mb-2'>Sub Category</label>
              <select
                name="subCategory"
                value={jobData.subCategory}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              >
                <option value="">Select Sub Category</option>
                {jobCategories[jobData.category].map(subCat => (
                  <option key={subCat} value={subCat}>{subCat}</option>
                ))}
              </select>
            </div>
          )}

          {/* Job Description */}
          <div>
            <label className='block text-sm font-medium mb-2'>Job Description</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              className='w-full p-2 border rounded min-h-[200px]'
              required
            />
          </div>

          {/* Location and Date */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-2'>Work Location</label>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Post Date</label>
              <input
                type="date"
                name="postDate"
                value={jobData.postDate}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              />
            </div>
          </div>

          {/* Job Type and Schedule */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-2'>Job Type</label>
              <select
                name="jobType"
                value={jobData.jobType}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Schedule</label>
              <input
                type="text"
                name="schedule"
                value={jobData.schedule}
                onChange={handleChange}
                className='w-full p-2 border rounded'
                placeholder="e.g., Monday-Friday, 9 AM-5 PM"
                required
              />
            </div>
          </div>

          {/* Benefits */}
          <div>
            <label className='block text-sm font-medium mb-2'>Benefits</label>
            <textarea
              name="benefits"
              value={jobData.benefits}
              onChange={handleChange}
              className='w-full p-2 border rounded min-h-[100px]'
              placeholder="List the benefits package details"
              required
            />
          </div>

          {/* Experience and Qualifications */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-2'>Experience Required</label>
              <textarea
                name="experience"
                value={jobData.experience}
                onChange={handleChange}
                className='w-full p-2 border rounded min-h-[100px]'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Qualifications</label>
              <textarea
                name="qualifications"
                value={jobData.qualifications}
                onChange={handleChange}
                className='w-full p-2 border rounded min-h-[100px]'
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <button
              type="submit"
              className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CMS