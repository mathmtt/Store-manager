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

module.exports = {
  getAll,
  getById,
};