const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is Required!']
    },
    lastName: {
        type: String,
        required: true,
    }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;