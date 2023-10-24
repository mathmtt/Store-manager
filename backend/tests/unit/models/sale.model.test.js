const sinon = require('sinon');
const { expect } = require('chai');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const {
  getAllSales,
  getOneSale,
  salesErrorDataBase,
} = require('../Mocks/sale.mock');

describe('Teste Model Sale', function () {
  it('Pegando todos os sales', async function () {
    sinon.stub(connection, 'execute').resolves([getAllSales]);
    const sales = await salesModel.getAll();
    expect(sales).an('array');
  });
  it('Pegando um sale pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([getOneSale]);
    const inputData = 2;
    const sale = await salesModel.getBySaleId(inputData);
    expect(sale).an('array');
  });
  it('Pegando um sale pelo id erro', async function () {
    sinon.stub(connection, 'execute').resolves([salesErrorDataBase]);
    const inputData = 9999;
    const sale = await salesModel.getBySaleId(inputData);
    expect(sale).an('array');
  });
  afterEach(function () {
    return sinon.restore();
  });
});