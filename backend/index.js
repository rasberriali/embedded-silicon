require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./model/projectRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://embedded-silicon-backend.vercel.app','https://embedded-silicon.vercel.app'], // Allow both Vite and React default ports
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));

// Use project routes
app.use('/', projectRoutes);

// Admin login route
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Hardcoded admin credentials (change these in production)
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'embedded123';
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate a simple token (in production, use JWT or similar)
      const token = 'admin-token-' + Date.now();
      res.json({ success: true, token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
