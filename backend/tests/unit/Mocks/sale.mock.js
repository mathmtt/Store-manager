const dateDay = '2023-10-21T13:54:51.000Z';

const getAllSales = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: dateDay,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: dateDay,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: dateDay,
  },
];

const getOneSale = [
  {
    productId: 3,
    quantity: 15,
    date: dateDay,
  },
];

const getAllSalesDataBase = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: dateDay,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: dateDay,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: dateDay,
  },
];

const getOneSaleDataBase = [
  {
    productId: 3,
    quantity: 15,
    date: dateDay,
  },
];

const salesErrorDataBase = [];

const allSalesDataBaseCreated = {
  status: 200,
  data: getAllSalesDataBase,
};

const oneSaleDataBaseCreated = {
  status: 200,
  data: getOneSaleDataBase,
};

const salesErrorDataBaseCreated = {
  status: 404,
  data: salesErrorDataBase,
};

module.exports = {
  getAllSales,
  getOneSale,
  getAllSalesDataBase,
  getOneSaleDataBase,
  salesErrorDataBase,
  allSalesDataBaseCreated,
  oneSaleDataBaseCreated,
  salesErrorDataBaseCreated,
};