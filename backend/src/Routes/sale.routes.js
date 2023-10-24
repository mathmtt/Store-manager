const route = require('express').Router();

const { salesController } = require('../controllers');

route.get('/', salesController.getAll);
route.get('/:id', salesController.getById);
route.post('/', salesController.createSale);

module.exports = route;