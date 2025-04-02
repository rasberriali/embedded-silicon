require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
});

const Job = mongoose.model('Job', jobSchema);

// Create a new job posting
app.post('/jobs', async (req, res) => {
    try {
      const { title, category, description, location, postDate, jobType } = req.body;
  
      if (!title || !category || !description || !location || !postDate || !jobType) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const job = new Job(req.body);
      await job.save();
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// Get all job postings
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific job posting by ID
app.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a job posting
app.put('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a job posting
app.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get job postings by category
app.get('/jobs/category/:category', async (req, res) => {
    try {
      const jobs = await Job.find({ category: req.params.category });
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
