const saleServices = require('../services/sale.services');

const getAll = async (_req, res) => {
  const { status, data } = await saleServices.getAllSales();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleServices.getSaleById(id);
  return res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
};