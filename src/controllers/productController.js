const { Op } = require("sequelize");
const { product, category } = require('../models');

// Constantes.
const LIMITE = { MIN: 5, MAX: 100, DEFAULT: 20 };
const PAGINACION = { MIN: 1 };
const CARACTERES_BUSQUEDA = { MIN: 1, MAX: 20 };

function calcularPaginacion(limite, pagina) {
  // Limite y cantidad de registros a omitir.
  let _cantRegistros = LIMITE.DEFAULT;
  let _cantRegistrosOmitir = 0;
  
  // Si el parametro existe, es un entero y es distinto al valor por defecto, calcularlo.
  if (limite && parseInt(limite) && parseInt(limite, 10) !== LIMITE.DEFAULT) {
    if (limite < LIMITE.MIN) {
      _cantRegistros = LIMITE.MIN
    } else if (limite > LIMITE.MAX) {
      _cantRegistros = LIMITE.MAX;
    } else {
      _cantRegistros = parseInt(limite);
    }
  }

  // Si el parametro existe, es un entero y es mayor o igual al valor minimo, calcularlo.
  if (pagina && parseInt(pagina, 10) >= PAGINACION.MIN) {
    _cantRegistrosOmitir = (parseInt(pagina) - 1) * _cantRegistros;
  }
  
  return [_cantRegistros, _cantRegistrosOmitir];
}

function obtenerProductos({
  cantidad,
  pagina,
  busqueda,
  categoria
}) {
  // Calcula la cantidad de registros y cantidad de registros a omitir en la consulta.
  let [cantRegistros, cantRegistrosOmitir] = calcularPaginacion(cantidad, pagina);

  let filtros = {};
  let filtroCategoria = {};

  // Filtrar mediante busqueda de caracteres en el nombre de los productos.
  // TODO: Coincidir con otros atributos.
  if (busqueda && busqueda.length >= CARACTERES_BUSQUEDA.MIN) {
    filtros.name = {
      [Op.substring]: busqueda.substring(0, CARACTERES_BUSQUEDA.MAX + 1).toLowerCase()
    }
  }

  // Filtrar por categoria.
  if (categoria && categoria.length > 0) {
    filtroCategoria.name = {
      [Op.substring]: categoria.toLowerCase()
    }
  }

  console.log("Filtros:", filtros, filtroCategoria);
  const resultados = product.findAndCountAll({
    include: {
      model: category,
      as: "Category",
      where: filtroCategoria
    },
    where: filtros,
    limit: cantRegistros,
    offset: cantRegistrosOmitir
  });

  return resultados;
}

module.exports = { obtenerProductos };