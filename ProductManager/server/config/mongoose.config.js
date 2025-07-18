//config - will handle the database configuration and connection

require ('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Fetch the const mongoose = require('mongoose');

const dbName = process.env.DB; // The name of the database

const username = process.env.ATLAS_USERNAME; // The name of the database user

const pw = process.env.ATLAS_PASSWORD;  // The name of the database password


// Replace with your Atlas MongoDB URI
const uri = `mongodb+srv://${username}:${pw}@cluster6.uhh9k.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster6`;


mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));