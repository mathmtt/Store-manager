const getAllProductsDataBase = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getOneProductDataBase = {
  id: 1,
  name: 'Martelo de Thor',
};

const errorDataBase = undefined;

const getAllDataBaseCreated = {
  status: 200,
  data: getAllProductsDataBase,
};

const getOneDataBaseCreated = {
  status: 200,
  data: getOneProductDataBase,
};

const errorDataBaseCreated = {
  status: 404,
  data: errorDataBase,
};

module.exports = {
  getAllProductsDataBase,
  getOneProductDataBase,
  errorDataBase,
  getAllDataBaseCreated,
  getOneDataBaseCreated,
  errorDataBaseCreated,
};
