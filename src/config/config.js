// Las credenciales de producción se encuentran en las variables de entorno (.env).
// La configuración de desarrollo y testing usan una base de datos SQLite.
require('dotenv').config();

module.exports = {
  development: {
    storage: "./dev_database.sqlite3",
    dialect: "sqlite"
  },
  test: {
    storage: "./dev_database.sqlite3",
    dialect: "sqlite"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
}
