// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
      
//     }
//   }
  
//   User.init({
//     id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4 // Assuming you want to use UUIDv4 as default
//     },
//     username: {
//       allowNull: false,
//       type: DataTypes.STRING // Corrected data type to string
//     },
//     email: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     hashPassword: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     refreshToken: {
//       allowNull: true,
//       type: DataTypes.STRING
//     },
//     isActive: {
//       allowNull: false,
//       type: DataTypes.BOOLEAN
//     }
//   }, {
//     sequelize,
//     modelName: 'User',
//     timestamps: true,
//     paranoid: true
//   });
  
//   return User;
// };

'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Info extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ nếu có
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
      type: DataTypes.DATE,
      allowNull: true
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
      type: DataTypes.STRING(100)
    },
    POINT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Info',
    timestamps: false, // Đặt timestamps thành false nếu bảng không có cột thời gian tạo và cập nhật
    tableName: 'INFO' // Đặt tên bảng phù hợp với tên trong cơ sở dữ liệu
  });
  
  return Info;
};
