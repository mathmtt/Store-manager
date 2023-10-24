const route = require('express').Router();

const { salesController } = require('../controllers');
const validateSales = require('../middlewares/validateSales');
const validateValues = require('../middlewares/validateValues');

route.get('/', salesController.getAll);
route.get('/:id', salesController.getById);
route.post(
  '/',
  validateValues,
  validateSales,
  salesController
    .createSale,
);

module.exports = route;