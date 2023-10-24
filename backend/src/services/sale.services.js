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

module.exports = {
  getAllSales,
  getSaleById,
};