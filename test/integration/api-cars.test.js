const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const mockFile = require('../mock/mockFile');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API', function () {
  beforeEach(function () {
    sinon.stub(fs, 'readFile').resolves(mockFile);
    sinon.stub(fs, 'writeFile').resolves();
  });

  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /cars', function () {
    it('Retorna todos os carros', async function () {
      const response = await chai.request(app).get('/cars');

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(mockFile.cars);
    });
  });
  describe('Usando o método GET em /cars/:id', function () {
    it('Retorna o carro com o id 3', async function () {
      const expectedResponse = {
        id: 3,
        name: 'Gol',
        brandId: 1,
        fuelId: 3,
      };
      const response = await chai.request(app).get('/cars/3');

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(expectedResponse);
    });
    it('Retorna uma lista vazia se for passado um id inválido', async function () {
        const response = await chai.request(app).get('/cars/1000');

        expect(response).to.have.status(404);
        expect(response.body).to.deep.equal({ error: 'Car not found' });
    });
  });
  describe('Usando o método GET em /cars/brands/:id', function () {
    it('Retorna os carros da marca com o id 4', async function () {
        const expectedResponse = [
            { id: 1, name: 'Spin', brandId: 2, fuelId: 1 },
            { id: 7, name: 'Bolt', brandId: 2, fuelId: 5 },
            { id: 13, name: 'S10', brandId: 2, fuelId: 6 },
          ];
        const response = await chai.request(app).get('/cars/brands/4');

        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(expectedResponse);
    });
    it('Retorna uma lista vazia se for passado um id inválido', async function () {
        const response = await chai.request(app).get('/cars/brands/100');

        expect(response).to.have.status(404);
        expect(response.body).to.deep.equal([]);
    });
  });
});
