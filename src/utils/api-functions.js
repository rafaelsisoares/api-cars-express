const fs = require('fs').promises;
const { join } = require('path');

const completePath = join(__dirname, '../files/api-cars.json');

const reader = async () => {
    try {
        const api = await fs.readFile(completePath, 'utf-8');
        return JSON.parse(api);
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const writer = async (content) => {
    try {
        await fs.writeFile(completePath, JSON.stringify(content, null, 2), 'utf-8');
    } catch (e) {
        console.error(`Erro: ${e.message}`);
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

const getCarsByBrand = async (id) => {
    const cars = await getAllCars();
    return cars.filter(({ brandId }) => brandId === id);
};

const postNewCar = async (newCar) => {
    const cars = await getAllCars();
    const id = cars.at(-1).id + 1;
    const newData = {
        id,
        ...newCar,
    };
    cars.push(newData);
    await writer(cars);
};

module.exports = {
    getAllCars,
    getCarById,
    getCarsByBrand,
    postNewCar,
};