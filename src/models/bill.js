'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Bill extends Model {
    static associate(models) {
      Bill.belongsTo(models.Activity, { foreignKey: 'ID_ACT' });
      Bill.belongsTo(models.Conditions, { foreignKey: 'ID_CONT' });
      Bill.belongsTo(models.Info, { foreignKey: 'ID_INFO' });
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
      type: DataTypes.INTEGER
    },
    ID_INFO: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Bill',
    timestamps: false,
    tableName: 'BILL'
  });

  return Bill;
};
