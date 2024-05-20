'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Storage extends Model {
    static associate(models) {
      Storage.belongsTo(models.Product, { foreignKey: 'ID_PRODUCT' });
    }
  }

  Storage.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_PRODUCT: {
      type: DataTypes.INTEGER
    },
    NAME: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    QUANTITY: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    IMPORT: {
      type: DataTypes.DATE
    },
    EXPORT: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Storage',
    timestamps: false,
    tableName: 'STORAGE'
  });

  return Storage;
};
