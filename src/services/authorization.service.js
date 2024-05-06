'use strict';
const db = require('../models');
const bcrypt = require('bcrypt')

let findUser = async (body) => {
  return await Authorization.findOne({
    where: {
      email: body.email,
    },
  });
}

let register = async (body) => {
  let user = await findUser(body);
  if(user == null){ //Kiểm tra xem email đã được sử dụng chưa
    bcrypt.hash(body.password, 10, async (err, hash) => { //Mã hóa mật khẩu trước khi lưu vào db
      if (err) {return next(err);}
      await Authorization.create({ // Tạo mới bản ghi trong bảng Authorization
        USERNAME: body.username,
        EMAIL: body.email,
        TITLE: "admin", // Đặt role thành "admin"
        PASSWORD: hash,
      });
    })
    return true;
  } else {
    return false;
  }
}

const signIn = async (req) => {
  try {
    const user = await Authorization.findOne({ where: { email: req.body.email } });
    if (!user) {
      return false; // Không tìm thấy người dùng
    } else {
      const comparePass = await bcrypt.compare(req.body.password, user.password);
      if (comparePass === false) {
        return false; // Mật khẩu không khớp
      } else {
        req.session.user = user;
        return true; // Đăng nhập thành công
      }
    }
  } catch (error) {
    throw new Error('Failed to sign in');
  }
};

const isLogging = async (req) => {
  try {
    if (req.session && req.session.user) {
      return true; // Đã đăng nhập
    } else {
      return false; // Chưa đăng nhập
    }
  } catch (error) {
    throw new Error('Failed to check login status');
  }
};

module.exports = { findUser, register, signIn, isLogging };