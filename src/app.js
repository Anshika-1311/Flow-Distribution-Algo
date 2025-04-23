const express = require('express');
const app = express();

// Import routes
const astrologerRoutes = require('./routes/astrologerRoutes');

// Middleware
app.use(express.json());

// Root Route (optional but helpful)
app.get('/', (req, res) => {
  res.send('Flow Distribution Backend is running!');
});

// Routes
app.use('/api/astrologers', astrologerRoutes);

// Export the app for testing or other uses
module.exports = app;