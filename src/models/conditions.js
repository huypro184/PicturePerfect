'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Conditions extends Model {
    static associate(models) {
      Conditions.hasMany(models.Bill, { foreignKey: 'ID_CONT' });
    }
  }

  Conditions.init({
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
    PERCENT: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Conditions',
    timestamps: false,
    tableName: 'CONDITIONS'
  });

  return Conditions;
};
