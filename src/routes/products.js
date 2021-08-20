const { Op } = require("sequelize");
const router = require('express').Router();
const { product, category } = require('../models');

// Obtener todos los productos.
router.get("/", async (req, res) => {
  let limite = 20;
  let salto = 0;
  let condiciones = {};

  // Actualizar limite.
  if (req.query.limit && parseInt(req.query.limit)) {
    if (req.query.limit < 10) {
      limite = 10;
    } else if (req.query.limit > 100) {
      limite = 100;
    } else {
      limite = parseInt(req.query.limit);
    }
  }

  // Actualizar pagina.
  if (req.query.page && parseInt(req.query.page, 10) >= 1) {
    salto = (parseInt(req.query.page) - 1) * limite;
  }

  // Filtros.

  // Actualizar busqueda.
  // TODO: Coincidir con otros atributos.  
  if (req.query.search && req.query.search.length >= 2) {
    condiciones.name = {
      [Op.substring]: req.query.search.substring(0, 21).toLowerCase()
    }
  }

  console.log(condiciones);

  const products = await product.findAll({
    include: {
      model: category, as: "Category"
    },
    where: condiciones,
    limit: limite,
    offset: salto
  });
  return res.json(products);
});

module.exports = router;