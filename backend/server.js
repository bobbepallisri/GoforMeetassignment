const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profiles'); // Adjust path if necessary

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', profileRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://srikanth:1234@cluster0.f1ro0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
