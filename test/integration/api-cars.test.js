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
            expect(response.body).to.deep.equal(mockFile);
        });
    });
});