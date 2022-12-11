const express = require('express');
const { getAllCars, getCarById } = require('./utils/api-functions');

const app = express();

app.get('/cars', async (_req, res) => {
    const cars = await getAllCars();
    res.status(200).json(cars);
});

app.get('/cars/:id', async (req, res) => {
    const { id } = req.params;
    const car = await getCarById(+id);
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(car);
});

module.exports = app;