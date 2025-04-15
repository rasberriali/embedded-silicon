import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SuccessStoriesCMS({ initialSection }) {
  const [storyData, setStoryData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    author: '',
    date: '',
    background: '',
    challenge: '',
    implementation: '',
    valueDelivered: '',
    clientInfo: {
      location: '',
      partnership: '',
      yearsOnMarket: '',
      customers: '',
      employees: '',
      industry: ''
    }
  });

  const [successStories, setSuccessStories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(initialSection || 'post'); // 'post' or 'manage'
  const [selectedStory, setSelectedStory] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState(null);

  const storyCategories = [
    "ASIC Design",
    "Verification",
    "Healthcare",
    "Automotive",
    "Education",
    "R&D",
    "Semiconductor"
  ];

  useEffect(() => {
    fetchSuccessStories();
  }, []);

  useEffect(() => {
    // Update active section when initialSection prop changes
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  const fetchSuccessStories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/success-stories');
      setSuccessStories(response.data);
    } catch (error) {
      console.error('Error fetching success stories:', error);
      setError('Failed to fetch success stories');
    }
  };

  const handleClientInfoChange = (field, value) => {
    setStoryData({
      ...storyData,
      clientInfo: {
        ...storyData.clientInfo,
        [field]: value
      }
    });
  };

  const resetForm = () => {
    setStoryData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      image: '',
      author: '',
      date: '',
      background: '',
      challenge: '',
      implementation: '',
      valueDelivered: '',
      clientInfo: {
        location: '',
        partnership: '',
        yearsOnMarket: '',
        customers: '',
        employees: '',
        industry: ''
      }
    });
    setSelectedStory(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formattedStoryData = {
        ...storyData,
        date: new Date(storyData.date || new Date()),
      };

      if (!formattedStoryData.title || !formattedStoryData.excerpt || 
          !formattedStoryData.content || !formattedStoryData.category) {
        throw new Error('Please fill in all required fields');
      }

      let response;
      if (selectedStory) {
        // Update existing story
        response = await axios.put(`http://localhost:5000/success-stories/${selectedStory._id}`, formattedStoryData);
        alert('Success story updated!');
      } else {
        // Create new story
        response = await axios.post('http://localhost:5000/success-stories', formattedStoryData);
        alert('Success story posted successfully!');
      }
      
      resetForm();
      fetchSuccessStories();
    } catch (error) {
      console.error('Error saving success story:', error);
      setError(error.response?.data?.error || error.message || 'Failed to save success story');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (story) => {
    setStoryData({
      ...story,
      date: story.date ? new Date(story.date).toISOString().split('T')[0] : '',
    });
    setSelectedStory(story);
    setActiveSection('post');
  };

  const handleDeleteClick = (story) => {
    setStoryToDelete(story);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!storyToDelete) return;
    
    try {
      await axios.delete(`http://localhost:5000/success-stories/${storyToDelete._id}`);
      setDeleteConfirmOpen(false);
      setStoryToDelete(null);
      alert('Success story deleted successfully!');
      fetchSuccessStories();
    } catch (error) {
      console.error('Error deleting success story:', error);
      setError('Failed to delete success story');
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
    setStoryToDelete(null);
  };

  return (
    <div>
      {activeSection === 'post' && (
        <div>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title*</label>
                <input
                  type="text"
                  value={storyData.title}
                  onChange={(e) => setStoryData({...storyData, title: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category*</label>
                <select
                  value={storyData.category}
                  onChange={(e) => setStoryData({...storyData, category: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  {storyCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Excerpt (Short summary)*</label>
              <textarea
                value={storyData.excerpt}
                onChange={(e) => setStoryData({...storyData, excerpt: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Content*</label>
              <textarea
                value={storyData.content}
                onChange={(e) => setStoryData({...storyData, content: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={storyData.image}
                  onChange={(e) => setStoryData({...storyData, image: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="URL to image"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  type="text"
                  value={storyData.author}
                  onChange={(e) => setStoryData({...storyData, author: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={storyData.date}
                onChange={(e) => setStoryData({...storyData, date: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Background</label>
              <textarea
                value={storyData.background}
                onChange={(e) => setStoryData({...storyData, background: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Challenge</label>
              <textarea
                value={storyData.challenge}
                onChange={(e) => setStoryData({...storyData, challenge: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Implementation</label>
              <textarea
                value={storyData.implementation}
                onChange={(e) => setStoryData({...storyData, implementation: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                placeholder="Separate points with commas (e.g. 'Point 1, Point 2, Point 3')"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Value Delivered</label>
              <textarea
                value={storyData.valueDelivered}
                onChange={(e) => setStoryData({...storyData, valueDelivered: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                placeholder="Separate points with periods (e.g. 'Point 1. Point 2. Point 3')"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Client Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.location}
                    onChange={(e) => handleClientInfoChange('location', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Partnership</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.partnership}
                    onChange={(e) => handleClientInfoChange('partnership', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Years on Market</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.yearsOnMarket}
                    onChange={(e) => handleClientInfoChange('yearsOnMarket', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Customers</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.customers}
                    onChange={(e) => handleClientInfoChange('customers', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Employees</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.employees}
                    onChange={(e) => handleClientInfoChange('employees', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Industry</label>
                  <input
                    type="text"
                    value={storyData.clientInfo.industry}
                    onChange={(e) => handleClientInfoChange('industry', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? 'Saving...' : (selectedStory ? 'Update Story' : 'Post Story')}
              </button>
              
              {selectedStory && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      )}
      
      {activeSection === 'manage' && (
        <div>
          {successStories.length === 0 ? (
            <div className="text-center text-gray-500">
              No success stories found. Add your first story!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {successStories.map((story) => (
                    <tr key={story._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{story.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{story.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(story.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{story.author || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3 justify-end">
                        <button 
                          onClick={() => handleEdit(story)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit story"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(story)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete story"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete the story "{storyToDelete?.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessStoriesCMS 