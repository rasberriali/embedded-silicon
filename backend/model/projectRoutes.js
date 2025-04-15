const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const jobSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  location: String,
  postDate: Date,
  jobType: String,
  schedule: String,
  benefits: String,
  experienceRequired: String,
  qualifications: String,
  jobLink: String,
});

const Job = mongoose.model('Job', jobSchema);

// Success Stories Schema
const successStorySchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  category: String,
  image: String, // URL to the image
  author: String,
  date: Date,
  background: String,
  challenge: String,
  implementation: String,
  valueDelivered: String,
  clientInfo: {
    location: String,
    partnership: String,
    yearsOnMarket: String,
    customers: String,
    employees: String,
    industry: String
  }
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

// Create a new job posting
router.post('/jobs', async (req, res) => {
  try {
    console.log('Received job posting request:', req.body);
    const { title, category, description, location, postDate, jobType } = req.body;

    if (!title || !category || !description || !location || !postDate || !jobType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const job = new Job(req.body);
    await job.save();
    console.log('Job saved successfully:', job);
    res.status(201).json(job);
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get all job postings
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific job posting by ID
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a job posting
router.put('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a job posting
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get job postings by category
router.get('/jobs/category/:category', async (req, res) => {
  try {
    const jobs = await Job.find({ category: req.params.category });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new success story
router.post('/success-stories', async (req, res) => {
  try {
    console.log('Received success story request:', req.body);
    const { title, excerpt, content, category, image, author } = req.body;

    if (!title || !excerpt || !content || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const successStory = new SuccessStory({
      ...req.body,
      date: req.body.date || new Date()
    });
    
    await successStory.save();
    console.log('Success story saved successfully:', successStory);
    res.status(201).json(successStory);
  } catch (error) {
    console.error('Error saving success story:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get all success stories
router.get('/success-stories', async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.json(successStories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific success story by ID
router.get('/success-stories/:id', async (req, res) => {
  try {
    const successStory = await SuccessStory.findById(req.params.id);
    if (!successStory) return res.status(404).json({ error: 'Success story not found' });
    res.json(successStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a success story
router.put('/success-stories/:id', async (req, res) => {
  try {
    const successStory = await SuccessStory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!successStory) return res.status(404).json({ error: 'Success story not found' });
    res.json(successStory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a success story
router.delete('/success-stories/:id', async (req, res) => {
  try {
    const successStory = await SuccessStory.findByIdAndDelete(req.params.id);
    if (!successStory) return res.status(404).json({ error: 'Success story not found' });
    res.json({ message: 'Success story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get success stories by category
router.get('/success-stories/category/:category', async (req, res) => {
  try {
    const successStories = await SuccessStory.find({ category: req.params.category });
    res.json(successStories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
