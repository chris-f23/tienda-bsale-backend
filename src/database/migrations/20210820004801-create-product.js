'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      url_image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        },
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};