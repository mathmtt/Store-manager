const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productsRoutes } = require('../../../src/models');
const { getAllProductsDataBase, getOneProductDataBase,
  errorDataBase } = require('../Mocks/products.mock');
  
const thor = 'Martelo de Thor';

describe('Teste Services', function () {
  it('Pegando todos os products', async function () {
    sinon.stub(productsRoutes, 'getAll').resolves(getAllProductsDataBase);
    const resData = [
      {
        id: 1,
        name: thor,
      },
      {
        id: 2,
        name: 'Traje de encolhimento',
      },
      {
        id: 3,
        name: 'Escudo do Capitão América',
      },
    ];

    const response = await productsServices.getAllProducts();
    expect(response.status).equal(200);
    expect(response.data).to.deep.equal(resData);
  });
  it('Pegando um product pelo id', async function () {
    sinon.stub(productsRoutes, 'getByProductId').resolves(getOneProductDataBase);
    const resData = {
      id: 1,
      name: thor,
    };
    
    const response = await productsServices.getProductById(1);
    expect(response.status).equal(200);
    expect(response.data).deep.equal(resData);
  });
  it('Pegando um product pelo id erro', async function () {
    sinon.stub(productsRoutes, 'getByProductId').resolves(errorDataBase);
    const resData = { message: 'Product not found' };
    const response = await productsServices.getProductById(9999);
    expect(response.status).equal(404);
    expect(response.data).deep.equal(resData);
  });
  it('Atualizando um product', async function () {
    sinon.stub(productsRoutes, 'insertUpdate').resolves(getOneProductDataBase);
    const resData = {
      id: 1,
      name: 'Martelo de Thor',
    };
    const response = await productsServices.upProduct(1, 'Martelo de Thor');
    expect(response.status).equal(200);
    expect(response.data).deep.equal(resData);
  });
  it('Atualizando um product erro', async function () {
    sinon.stub(productsRoutes, 'insertUpdate').resolves(errorDataBase);
    const resData = { message: 'Product not found' };
    const response = await productsServices.upProduct(9999, 'Martelo de Thor');
    expect(response.status).equal(404);
    expect(response.data).deep.equal(resData);
  });
  afterEach(function () {
    return sinon.restore();
  });
});