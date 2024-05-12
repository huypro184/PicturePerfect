'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Salary extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Salary.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    HOUR_RATE: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    HOUR_WORK: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    TOTAL: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    DAY: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Salary',
    timestamps: false,
    tableName: 'SALARY'
  });
  
  return Salary;
};
