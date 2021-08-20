'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Una categoria posee muchos productos.
      Category.hasMany(models.product, {
        foreignKey: "category",
        as: "Category"
      });
    }
  };
  Category.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'category',
  });
  return Category;
};