const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesServices } = require('../../../src/services');
const {
  getAllSales,
  getOneSale,
  salesErrorDataBase,
} = require('../Mocks/sale.mock');

describe('Teste Services Sale', function () {
  it('Pegando todos os sales', async function () {
    sinon.stub(salesModel, 'getAll').resolves(getAllSales);
    const responseData = [
      {
        saleId: 1,
        productId: 1,
        quantity: 5,
        date: '2023-10-21T13:54:51.000Z',
      },
      {
        saleId: 1,
        productId: 2,
        quantity: 10,
        date: '2023-10-21T13:54:51.000Z',
      },
      {
        saleId: 2,
        productId: 3,
        quantity: 15,
        date: '2023-10-21T13:54:51.000Z',
      },
    ];
    const response = await salesServices.getAllSales();
    expect(response.status).equal(200);
    expect(response.data).to.deep.equal(responseData);
  });
  it('Pegando um sale pelo id', async function () {
    sinon.stub(salesModel, 'getBySaleId').resolves(getOneSale);
    const responseData = [
      {
        productId: 3,
        quantity: 15,
        date: '2023-10-21T13:54:51.000Z',
      },
    ];
    const response = await salesServices.getSaleById(1);
    expect(response.status).equal(200);
    expect(response.data).deep.equal(responseData);
  });
  it('Pegando um sale pelo id erro', async function () {
    sinon.stub(salesModel, 'getBySaleId').resolves(salesErrorDataBase);
    const responseData = { message: 'Sale not found' };
    const response = await salesServices.getSaleById(9999);
    expect(response.status).equal(404);
    expect(response.data).deep.equal(responseData);
  });
  it('Adicionando um sale', async function () {
    sinon.stub(salesModel, 'insertSale').resolves(1);
    sinon.stub(salesModel, 'getBySaleId').resolves(getOneSale);
    sinon.stub(salesModel, 'insertSalesProducts').resolves();
    const inputData = [
      {
        productId: 3,
        quantity: 15,
      },
    ];
    const responseData = {
      id: 1,
      itemsSold: [
        {
          productId: 3,
          quantity: 15,
        },
      ],
    };
    const response = await salesServices.addSale(inputData);
    expect(response.status).equal(201);
    expect(response.data).deep.equal(responseData);
  });
  it('Adicionando um sale com erro', async function () {
    sinon.stub(salesModel, 'insertSale').resolves(1);
    sinon.stub(salesModel, 'getBySaleId').resolves(salesErrorDataBase);
    sinon.stub(salesModel, 'insertSalesProducts').resolves();
    const inputData = [
      {
        productId: 9999,
        quantity: 15,
      },
    ];
    const responseData = { message: 'Product not found' };
    const response = await salesServices.addSale(inputData);
    expect(response.status).equal(404);
    expect(response.data).deep.equal(responseData);
  });
  afterEach(function () {
    return sinon.restore();
  });
});
