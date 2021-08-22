const router = require('express').Router();
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');

/**
 * GET /api/categories
 * Obtiene las categorias disponibles.
 */
router.get("/categories", async (req, res) => {
  try {
    const categorias = await categoryController.obtenerCategorias();
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ status: 500, error_msg: `${error.name}: ${error.message}.` });
  }
});

/**
 * GET /api/products
 * Obtiene una cantidad limitada de productos desde la base de datos, respetando ciertos parámetros.
 */
 router.get("/products", async (req, res) => {
  try {
    const productos = await productController.obtenerProductos({
      cantidad: req.query.limit,
      pagina: req.query.page,
      busqueda: req.query.search,
      categoria: req.query.category
    });
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ status: 500, error_msg: `${error.name}: ${error.message}.` });
  }
});

module.exports = router;