const connection = require('./connection'); // Supondo que você tenha um arquivo de conexão

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getByProductId = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return product;
};

const productInsert = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return product.insertId;
};

const insertUpdate = async (id, name) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  return result;
};

module.exports = {
  getAll,
  getByProductId,
  productInsert,
  insertUpdate,
};