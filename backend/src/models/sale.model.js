const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [data] = await connection.execute(
    'SELECT SP.sale_id, S.date, SP.product_id, SP.quantity FROM sales_products AS SP '
    + 'INNER JOIN sales AS S ON SP.sale_id = S.id',
  );
  console.log(data, 'data');
  return camelize(data);
};

const getBySaleId = async (id) => {
  const [data] = await connection.execute(
    'SELECT S.date, SP.product_id, SP.quantity FROM sales_products AS SP '
      + 'INNER JOIN sales AS S ON SP.sale_id = S.id WHERE SP.sale_id = ?',
    [id],
  );
  return camelize(data);
};

module.exports = {
  getAll,
  getBySaleId,
};
