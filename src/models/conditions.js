'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Condition extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Condition.init({
    ID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    NAME: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    PERCENT: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Condition',
    timestamps: false,
    tableName: 'CONDITIONS'
  });
  
  return Condition;
};
