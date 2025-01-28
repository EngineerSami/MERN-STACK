const express = require('express');
const router = express.Router();

// Import your controller functions
const { getAllUsers } = require('../controllers/Controller');

// Define your routes and make sure they are correctly linked to handler functions
router.get('/', getAllUsers);  // Ensure 'getAllUsers' is defined properly

module.exports = router;
