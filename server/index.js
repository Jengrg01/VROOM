// Importing required modules
const express = require('express'); // Importing Express framework
const mongoose = require('mongoose'); // Importing Mongoose for MongoDB interactions
const cors = require('cors'); // Importing CORS for Cross-Origin Resource Sharing
const UserModel=require('./models/Users')
const app = express(); // Creating an instance of Express
app.use(cors()); // Using CORS middleware to enable cross-origin requests
app.use(express.json()); // Parsing incoming requests with JSON payloads

// Connection with the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/register",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

// Listening on port 3001 for incoming requests
app.listen(3001, () => {
    console.log("Server is Running");
})