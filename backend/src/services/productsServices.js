const { productsRoutes } = require('../models');

const getAllProducts = async () => {
  const products = await productsRoutes.getAll();
  return products;
};
 
const getProductById = async (id) => {
  const product = await productsRoutes.getById(id);
  if (!product) throw new Error('Product not found');
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};