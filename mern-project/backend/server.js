const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/mongoose.config');  // Import the DB connection function

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const userRoutes = require('./routes/Routes');
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
