const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesServices } = require('../../../src/services');
const {
  allSalesDataBaseCreated,
  getAllSales,
  oneSaleDataBaseCreated,
  getOneSale,
  salesErrorDataBaseCreated,
  salesErrorDataBase,

} = require('../Mocks/sale.mock');

describe('Teste Controller Sale', function () {
  it('Pegando todos os sales', async function () {
    sinon.stub(salesServices, 'getAllSales').resolves(allSalesDataBaseCreated);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(getAllSales);
  });
  it('Pegando um sale pelo id', async function () {
    sinon.stub(salesServices, 'getSaleById').resolves(oneSaleDataBaseCreated);
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
    await salesController.getById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(getOneSale);
  });
  it('Pegando um sale pelo id erro', async function () {
    sinon.stub(salesServices, 'getSaleById').resolves(salesErrorDataBaseCreated);
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
    await salesController.getById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.status().json).to.be.calledWith(salesErrorDataBase);
  });
  afterEach(function () {
    return sinon.restore();
  });
});
