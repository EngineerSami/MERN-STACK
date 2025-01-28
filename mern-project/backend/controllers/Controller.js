const User = require('../models/Model');  // Ensure the path is correct

// Controller function to get all users
const getAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => {
            console.error('Error fetching users:', err);
            res.status(500).json({ message: 'Server Error', error: err.message || err });
        });
};

module.exports = { getAllUsers };  // Export as an object