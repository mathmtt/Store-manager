const chai = require('chai');

const sinon = require('sinon');
const { productsRoutes } = require('../../../src/models');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const {
  getAllProductsDataBase,
  getOneProductDataBase,
  errorDataBase,
} = require('../Mocks/products.mock');

describe('Teste Model', function () {
  it('Pegando todos os products', async function () {
    sinon.stub(connection, 'execute').resolves([getAllProductsDataBase]);
    const products = await productsRoutes.getAll();
    expect(products).an('array');
    expect(products).equal(getAllProductsDataBase);
  });
  it('Pegando um product pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[getOneProductDataBase]]);
    const inputData = 1;
    const product = await productsRoutes.getByProductId(inputData);
    expect(product).an('object');
    expect(product).equal(getOneProductDataBase);
  });
  it('Pegando um product pelo id erro', async function () {
    sinon.stub(connection, 'execute').resolves([[errorDataBase]]);
    const inputData = 9999;
    const product = await productsRoutes.getByProductId(inputData);
    expect(product).an('undefined');
    expect(product).equal(errorDataBase);
  });
  afterEach(function () {
    return sinon.restore();
  });
});