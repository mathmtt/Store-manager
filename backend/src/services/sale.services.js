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

const checkId = async (data) => {
  const checkPromises = data.map(async (item) => {
    const { productId } = item;
    const product = await salesModel.getBySaleId(productId);
    if (product.length === 0) {
      return {
        status: 'ERROR',
      };
    }
    return null;
  });
  
  const sequel = await Promise.all(checkPromises);
  
  const errors = sequel.filter((result) => result && result.status === 'ERROR');
  return errors;
};

const addSale = async (data) => {
  const insertId = await salesModel.insertSale();
  const checkErrors = await checkId(data);
  if (checkErrors.length > 0) {
    return {
      status: 404,
      data: { message: 'Product not found' },
    };
  }
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