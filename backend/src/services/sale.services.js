const { salesModel } = require('../models');

const getAllSales = async () => {
  const data = await salesModel.getAll();
  return { status: 200, data };
};

const getSaleById = async (id) => {
  const data = await salesModel.getBySaleId(id);
  if (data.length === 0) {
    return {
      status: 404,
      data: { message: 'Sale not found' },
    };
  }
  return { status: 200, data };
};

const addSale = async (data) => {
  const insertId = await salesModel.insertSale();
  data.map(async (item) => {
    const { productId, quantity } = item;
    await salesModel.insertSalesProducts(insertId, productId, quantity);
  });
  const returnData = {
    id: insertId,
    itemsSold: data,
  };
  return { status: 201, data: returnData };
};

module.exports = {
  getAllSales,
  getSaleById,
  addSale,
};