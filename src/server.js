const express = require('express');
const moment = require('moment');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware:
const logger = (req, res, next) => {
  console.log(`${moment().format()} - ${req.protocol}://${req.hostname}${req.originalUrl}`);
  next();
}

app.use(logger);

// Rutas.
const productsRouter = require('./routes/products');
app.use("/api/products", productsRouter);

// Ruta por defecto; ruta no encontrada.
app.use((req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    msg: `Ruta '${req.protocol}://${req.hostname}${req.originalUrl}' no encontrada.`
  });

  next();
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}.`)
});