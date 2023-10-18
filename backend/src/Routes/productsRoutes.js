const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.getAllProducts);

module.exports = route;