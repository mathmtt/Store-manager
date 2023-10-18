const connection = require('./connection'); // Supondo que você tenha um arquivo de conexão

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product[0];
};

module.exports = {
  getAll,
  getById,
};