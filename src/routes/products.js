const router = require('express').Router();
const { product, category } = require('../models');

// Obtener todos los productos.
router.get("/", async (req, res) => {
  const products = await product.findAll({ limit: 10, include: { model: category, as: "Category" } });
  return res.json(products);
});

module.exports = router;