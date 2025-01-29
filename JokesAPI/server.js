require('./config/mongoose.config');

const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes
const jokeRoutes = require('./routes/joke.routes');
jokeRoutes(app);

// Start server
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});