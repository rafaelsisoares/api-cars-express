const mockFile = {
    brands: [
      {
        id: 1,
        name: 'Volkswagen',
      },
      {
        id: 2,
        name: 'Chevrolet',
      },
      {
        id: 3,
        name: 'FIAT',
      },
      {
        id: 4,
        name: 'Porsche',
      },
      {
        id: 5,
        name: 'McLaren',
      },
      {
        id: 6,
        name: 'Renault',
      },
    ],
    fuels: [
      {
        id: 1,
        fuel: 'Gasoline',
      },
      {
        id: 2,
        fuel: 'Alcohol',
      },
      {
        id: 3,
        fuel: 'Flex',
      },
      {
        id: 4,
        fuel: 'Hybrid',
      },
      {
        id: 5,
        fuel: 'Eletric',
      },
      {
        id: 6,
        fuel: 'Diesel',
      },
    ],
    cars: [
      {
        id: 1,
        name: 'Spin',
        brandId: 2,
        fuelId: 1,
      },
      {
        id: 2,
        name: 'Taycan',
        brandId: 4,
        fuelId: 5,
      },
      {
        id: 3,
        name: 'Gol',
        brandId: 1,
        fuelId: 3,
      },
      {
        id: 4,
        name: 'Toro',
        brandId: 3,
        fuelId: 6,
      },
      {
        id: 5,
        name: 'Artura',
        brandId: 5,
        fuelId: 4,
      },
      {
        id: 6,
        name: 'Clio',
        brandId: 6,
        fuelId: 3,
      },
    ],
  };

module.exports = mockFile;