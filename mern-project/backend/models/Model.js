const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
      minlength: [3, 'First name must be at least 3 characters long.'],
      maxlength: [20, 'First name cannot exceed 20 characters.'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.'],
      minlength: [3, 'Last name must be at least 3 characters long.'],
      maxlength: [20, 'Last name cannot exceed 20 characters.'],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
