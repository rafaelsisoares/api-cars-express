const express = require('express');
const { getAllCars, getCarById, getCarsByBrand } = require('./utils/api-functions');

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

app.get('/cars/brands/:id', async (req, res) => {
    const { id } = req.params;
    const cars = await getCarsByBrand(+id);
    res.status(cars.length === 0 ? 404 : 200).json(cars);
});

module.exports = app;