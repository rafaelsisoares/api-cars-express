const fs = require('fs').promises;
const path = require('path');

const { join } = path;

const reader = async () => {
    const completePath = join(__dirname, '../files/api-cars.json');
    try {
        const api = await fs.readFile(completePath, 'utf-8');
        return JSON.parse(api);
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const getAllCars = async () => {
    const response = await reader();
    return response.cars;
};

const getCarById = async (id) => {
    const cars = await getAllCars();
    const targetCar = cars.find((car) => car.id === id);
    return targetCar;
};

module.exports = {
    getAllCars,
    getCarById,
};