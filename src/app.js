const express = require('express');
const { getAllCars } = require('./utils/api-functions');

const app = express();

app.get('/cars', async (_req, res) => {
    const cars = await getAllCars();
    res.status(200).json(cars);
});

module.exports = app;