const moment = require('moment');

module.exports = (req, res, next) => {
  console.log(`${moment().format()} - ${req.protocol}://${req.hostname}${req.originalUrl}`);
  next();
}