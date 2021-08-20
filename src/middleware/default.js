module.exports = (req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    msg: `Ruta '${req.protocol}://${req.hostname}${req.originalUrl}' no encontrada.`
  });

  next();
}