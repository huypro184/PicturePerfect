'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Feedback extends Model {} 

  Feedback.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    FEEDBACK: {
      type: DataTypes.STRING(255),
      allowNull: true 
    },
    SERVICE: {
      type: DataTypes.STRING(255),
      allowNull: true 
    },
    RATE: {
      type: DataTypes.INTEGER,
      allowNull: true 
    }
  }, {
    sequelize,
    modelName: 'Feedback',
    timestamps: false,
    tableName: 'FEEDBACK'
  });

  return Feedback; 
};
