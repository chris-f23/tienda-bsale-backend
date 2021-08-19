const router = require('express').Router();

// Productos de prueba.
const products = [
  {
    id: 1,
    name: "Pisco Tres Erres 35°",
    price: 3901.5,
    discount: 10,
    category: {
      id: 1,
      name: "BOTILLERIA"
    }
  },
  {
    id: 2,
    name: "Galletas McKay Chocolate",
    price: 300.0,
    discount: 2,
    category: {
      id: 2,
      name: "SNACKS"
    }
  },
  {
    id: 3,
    name: "Pisco Alto del Carmen 39°",
    price: 6800.0,
    discount: 5,
    category: {
      id: 1,
      name: "BOTILLERIA"
    }
  },
  {
    id: 4,
    name: "Galletas McKay Limon",
    price: 320.0,
    discount: 2,
    category: {
      id: 2,
      name: "SNACKS"
    }
  },
];

// Obtener todos los productos
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;