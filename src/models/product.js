'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Un producto pertenece a una categoria.
      Product.belongsTo(models.category, {
        foreignKey: "category",
        as: "Category"
      });
    }
  };
  Product.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'product',
  });
  return Product;
};