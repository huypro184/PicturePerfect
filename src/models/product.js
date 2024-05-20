'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Activity, { foreignKey: 'ID_PRODUCT' });
      Product.hasMany(models.Storage, { foreignKey: 'ID_PRODUCT' });
    }
  }

  Product.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    NAME: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    UNIT_PRICE: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
    tableName: 'PRODUCT'
  });

  return Product;
};
