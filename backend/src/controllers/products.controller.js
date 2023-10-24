const { productsServices } = require('../services');

const getAll = async (req, res) => {
  const { status, data } = await productsServices.getAllProducts();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsServices.getProductById(id);
  return res.status(status).json(data);
};

const createProduct = async (req, res) => {
  const { name } = req.body || {};
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const { status, data } = await productsServices.addproduct(name);
  return res.status(status).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const { status, data } = await productsServices.upProduct(id, name);
  return res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
};