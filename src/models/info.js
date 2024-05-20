'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Info extends Model {
    static associate(models) {
      Info.hasMany(models.Dow, { foreignKey: 'ID_INFO' });
      Info.hasMany(models.Room, { foreignKey: 'ID_INFO' });
      Info.hasMany(models.Bill, { foreignKey: 'ID_INFO' });
      Info.hasMany(models.Salary, { foreignKey: 'ID_INFO' });
      Info.hasOne(models.Authorization, { foreignKey: 'ID' });
    }
  }
  
  Info.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    NAME: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    DOB: {
      type: DataTypes.DATE
    },
    PHONE: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    TITLE: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    EMAIL: {
      allowNull: false,
      type: DataTypes.STRING(100),
      unique: true
    },
    SEX: {
      type: DataTypes.STRING(50)
    },
    ADDRESS: {
      type: DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'Info',
    timestamps: false,
    tableName: 'INFO'
  });

  return Info;
};
