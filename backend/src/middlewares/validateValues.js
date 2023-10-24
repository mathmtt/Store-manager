const validateValues = (req, res, next) => {
  const toValidate = req.body;
  let hasError = false;

  toValidate.forEach((item) => {
    if (item.quantity <= 0) {
      hasError = true;
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });

  if (hasError) {
    return;
  }
  next();
};

module.exports = validateValues;