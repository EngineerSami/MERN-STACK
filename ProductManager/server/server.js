const express = require('express');
const app = express();
require('dotenv').config();
require('./config/mongoose.config')
const cors = require('cors')
const port = process.env.PORT;


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


//Middleware

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.json("success");})

//Routes

const proudectRoutes = require('./routes/productManager.routes');
proudectRoutes(app);


app.listen( port,()=>{ console.log(`Server running on port ${port}`);});