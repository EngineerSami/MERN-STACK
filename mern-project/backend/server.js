require('dotenv').config();
require('./config/mongoose.config');  // Ensure the path is correct

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const userRoutes = require('./routes/Routes'); // Ensure this path is correct

// Use the router
app.use(userRoutes); // Use app.use() instead of userRoutes(app)



// Start server
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});