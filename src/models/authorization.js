'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Authorization extends Model {
    static associate(models) {
      Authorization.belongsTo(models.Info, { foreignKey: 'ID' });
    }
  }
  
  Authorization.init({
    ID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    USERNAME: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    PASSWORD: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    TITLE: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    EMAIL: {
      allowNull: false,
      type: DataTypes.STRING(100)
    }
  }, {
    sequelize,
    modelName: 'Authorization',
    timestamps: false,
    tableName: 'AUTHORIZATION'
  });

  return Authorization;
};
