const { validationResult } = require("express-validator");
const products = require("../data/products");

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
};

exports.createProduct = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { name, quantity } = req.body;

  const product = {
    id: products.length + 1,
    name,
    quantity
  };

  products.push(product);

  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, quantity } = req.body;

  product.name = name;
  product.quantity = quantity;

  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(
    p => p.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products.splice(index, 1);

  res.status(204).send();
};
