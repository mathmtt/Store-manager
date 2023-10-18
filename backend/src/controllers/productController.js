const { productsService } = require('../services');

const getAll = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await productsService.getProductById(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getAll,
  getById,
};