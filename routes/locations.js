const express = require('express');
const router = express.Router();
const Locations = require('../models/Locations');

// ROUTE 1: Get All the Locations using: GET "/api/notes/fetchallLocations".
router.get('/fetchallLocations', async (req, res) => {
    try {
        const location = Locations
        res.json(location)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})