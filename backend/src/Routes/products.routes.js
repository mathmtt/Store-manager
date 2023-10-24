const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.getAll);
route.post('/', productController.createProduct);
route.get('/:id/', productController.getById);

module.exports = route;