'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Room extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Room.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_FILM: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    ID_INFO: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Info',
        key: 'ID'
      }
    },
    SLOT: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    DAY: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Room',
    timestamps: false,
    tableName: 'ROOM'
  });
  
  return Room;
};
