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

const addproduct = async (name) => {
  if (name.length < 5) {
    const data = { message: '"name" length must be at least 5 characters long' };
    return { status: 422, data };
  }
  const insertId = await productsRoutes.productInsert(name);
  const data = await productsRoutes.getByProductId(insertId);
  return { status: 201, data };
};

const upProduct = async (id, name) => {
  const exist = await productsRoutes.getByProductId(id);
  if (!exist) {
    return {
      status: 404,
      data: { message: 'Product not found' },
    };
  }
  if (name.length < 5) {
    const data = { message: '"name" length must be at least 5 characters long' };
    return { status: 422, data };
  }
  await productsRoutes.insertUpdate(id, name);
  const data = await productsRoutes.getByProductId(id);
  return { status: 200, data };
};

module.exports = {
  getAllProducts,
  getProductById,
  addproduct,
  upProduct,
};