'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsTo(models.Info, { foreignKey: 'ID_INFO' });
    }
  }

  Room.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_INFO: {
      type: DataTypes.INTEGER
    },
    SLOTS: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    STATUS: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    CHECK_IN: {
      type: DataTypes.TIME
    },
    CHECK_OUT: {
      type: DataTypes.TIME
    },
    DAY_CHECKIN: {
      type: DataTypes.DATE
    },
    DAY_CHECKOUT: {
      type: DataTypes.DATE
    },
    SERVICE: {
      type: DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'Room',
    timestamps: false,
    tableName: 'ROOM'
  });

  return Room;
};
