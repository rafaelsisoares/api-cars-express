const express = require('express');
const {
  getAllCars,
  getCarById,
  getCarsByBrand,
  postNewCar,
  postNewBrand,
} = require('./utils/api-functions');

const app = express();

app.use(express.json());

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

app.post('/cars', async (req, res) => {
  const { name, brandId, fuelId } = req.body;
  await postNewCar({ name, brandId, fuelId });
  res.status(201).json({ name, brandId, fuelId });
});

app.post('/cars/brands', async (req, res) => {
  const brand = req.body.name;
  await postNewBrand(brand);
  res.status(201).json({ name: brand });
});

module.exports = app;
