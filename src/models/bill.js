'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Bill extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Bill.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_ACT: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ID_CONT: {
      allowNull: true, // Có thể là null nếu không bắt buộc
      type: DataTypes.INTEGER
    },
    ID_INFO: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    TOTAL_PRICE: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Bill',
    timestamps: false,
    tableName: 'BILL'
  });
  
  return Bill;
};
