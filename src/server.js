const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware:
const cors = require('cors');
const logger = require('./middleware/logger');

app.use(cors());
app.use(logger);

// Rutas.
const productsRouter = require('./routes/products');
app.use("/api/products", productsRouter);

// Middleware para ruta no encontrada.
const defaultHandler = require('./middleware/default');
app.use(defaultHandler);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}.`)
});