const router = require('express').Router();
const productController = require('../controllers/productController');

/**
 * GET /api/products
 * Obtiene una cantidad limitada de productos desde la base de datos, respetando ciertos parámetros.
 */
router.get("/", async (req, res) => {
  try {
    const productos = await productController.obtenerProductos(req.query);
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ status: 500, error_msg: `${error.name}: ${error.message}.` });
  }
});

module.exports = router;