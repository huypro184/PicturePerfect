'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Film extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Film.init({
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
    DAY: {
      allowNull: false,
      type: DataTypes.DATE
    },
    TYPE: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'Film',
    timestamps: false,
    tableName: 'FILM'
  });
  
  return Film;
};
