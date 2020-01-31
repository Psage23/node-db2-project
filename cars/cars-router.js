const express = require('express');
const cars = require('../data/cars-config');
const router = express.Router();


// CRUD here
router.get('/', (req, res) => {
    cars('cars')
    .then(car => {
        res.json(car);
    })
    .catch (err => {
        res.status(500).json({message: 'Failed to retrieve data of cars'})
    })
})

module.exports = router;