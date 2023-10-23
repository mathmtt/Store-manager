const { productsRoutes } = require('../models');

const getAllProducts = async () => {
  const data = await productsRoutes.getAll();
  return { status: 200, data };
};
 
const getProductById = async (id) => {
  const data = await productsRoutes.getByProductId(id);
  if (data === undefined) {
    return {
      status: 404,
      data: { message: 'Product not found' } };
  }
  return { status: 200, data };
};

module.exports = {
  getAllProducts,
  getProductById,
};