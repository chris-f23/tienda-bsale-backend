const { Op } = require("sequelize");
const { category } = require('../models');

function obtenerCategorias() {
  const resultados = category.findAndCountAll();
  return resultados;
}

module.exports = { obtenerCategorias };