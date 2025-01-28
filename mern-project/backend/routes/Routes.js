const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/Controller'); // Ensure this path is correct

// Define your routes
router.get('/api/users', getAllUsers);

// Export the router
module.exports = router; // Export the router, not a function