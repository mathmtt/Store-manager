const validateSales = (req, res, next) => {
  const toValidate = req.body;
  let hasError = false;

  toValidate.forEach((item) => {
    if (!item.productId) {
      hasError = true;
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (!item.quantity) {
      hasError = true;
      return res.status(400).json({ message: '"quantity" is required' });
    }
  });
  if (hasError) {
    return;
  }
  next();
};

module.exports = validateSales;