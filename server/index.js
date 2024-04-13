// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

// Connection with the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Registration route
app.post("/register", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Login route
app.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        // Check if user exists in the database
        const user = await UserModel.findOne({ phoneNumber });

        // If user not found, redirect to registration page
        if (!user) {
            // You can change the status code to indicate redirection
            return res.status(302).json({ redirectTo: "/register", message: "User not registered. Redirecting to registration page." });
        }

        // If user exists, check password
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If credentials are valid, respond with success message
        res.json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Listening on port 3001 for incoming requests
app.listen(3001, () => {
    console.log("Server is Running");
});
