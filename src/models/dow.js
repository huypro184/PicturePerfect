'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Dow extends Model {
    static associate(models) {
      Dow.belongsTo(models.Info, { foreignKey: 'ID_INFO' });
    }
  }

  Dow.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    START_TIME: {
      allowNull: false,
      type: DataTypes.TIME
    },
    END_TIME: {
      allowNull: false,
      type: DataTypes.TIME
    },
    DAY: {
      allowNull: false,
      type: DataTypes.DATE
    },
    ID_INFO: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Dow',
    timestamps: false,
    tableName: 'DOW'
  });

  return Dow;
};
