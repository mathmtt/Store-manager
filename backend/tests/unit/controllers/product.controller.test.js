const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productController } = require('../../../src/controllers');
const { productsServices } = require('../../../src/services');
const {
  getAllProductsDataBase,
  getOneProductDataBase,
  errorDataBase,
  getAllDataBaseCreated,
  getOneDataBaseCreated,
  errorDataBaseCreated,
} = require('../Mocks/products.mock');

describe('Teste Controller', function () {
  it('Pegando todos os products', async function () {
    sinon.stub(productsServices, 'getAllProducts').resolves(getAllDataBaseCreated);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.status().json).to.be.calledWith(getAllProductsDataBase);
  });
  it('Pegando um product pelo id', async function () {
    sinon.stub(productsServices, 'getProductById').resolves(getOneDataBaseCreated);
    const req = {
      params: {
        id: 1,
      },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.status().json).to.be.calledWith(getOneProductDataBase);
  });
  it('Pegando um product pelo id erro', async function () {
    sinon.stub(productsServices, 'getProductById').resolves(errorDataBaseCreated);
    const req = {
      params: {
        id: 9999,
      },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.status().json).to.be.calledWith(errorDataBase);
  });
  afterEach(function () {
    return sinon.restore();
  });
});