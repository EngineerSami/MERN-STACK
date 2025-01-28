require('dotenv').config();
const mongoose = require('mongoose');

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = encodeURIComponent(process.env.ATLAS_PASSWORD); 


const uri = `mongodb+srv://${username}:${pw}@cluster6.uhh9k.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster6`

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));