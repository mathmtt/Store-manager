const route = require('express').Router();

const { salesController } = require('../controllers');

route.get('/', salesController.getAll);
route.get('/:id', salesController.getById);

module.exports = route;