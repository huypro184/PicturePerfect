'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Product.init({
    ID: {
      allowNull: false,
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
