require('dotenv').config();  // Load environment variables
const mongoose = require('mongoose');

// Fetch values from environment variables
const dbName = process.env.DB_NAME;  // Database name
const username = process.env.DB_USERNAME;  // MongoDB Atlas username
const pw = encodeURIComponent(process.env.DB_PASSWORD);  // URL encode the password (ensure password is treated as string)

// Log the URI to check if it's being built correctly
console.log(`Connecting to MongoDB at: mongodb+srv://${username}:${pw}@cluster0.zk4bj.mongodb.net/${dbName}`);

// MongoDB URI format
const mongoURI = `mongodb+srv://${username}:${pw}@cluster0.zk4bj.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1);  // Exit if the connection fails
    }
};

// Export the connectDB function
module.exports = connectDB;