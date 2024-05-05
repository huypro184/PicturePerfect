'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Authorization extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
    }
  }
  
  Authorization.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
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
    timestamps: false, // Đặt timestamps thành false nếu bảng không có cột thời gian tạo và cập nhật
    tableName: 'AUTHORIZATION' // Đặt tên bảng phù hợp với tên trong cơ sở dữ liệu
  });
  
  return Authorization;
};
