require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5000'], // Allow both Vite and React default ports
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Job Schema
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

// Job Routes
app.post('/jobs', async (req, res) => {
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

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sample Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
