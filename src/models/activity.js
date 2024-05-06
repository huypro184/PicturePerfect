'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Activity extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Activity.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_PRODUCT: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    QUANTITY: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    DAY: {
      allowNull: false,
      type: DataTypes.DATE
    },
    TOTAL_PRICE: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Activity',
    timestamps: false,
    tableName: 'ACTIVITY'
  });
  
  return Activity;
};
