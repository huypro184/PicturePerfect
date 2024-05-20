'use strict';

// Import model Info từ thư mục models
const { Info } = require("../models");

// Hàm findStaffById: Tìm kiếm một nhân viên dựa trên ID
let findStaffById = async (id) => {
  return await Info.findByPk(id);
};

// Hàm createStaff: Tạo một nhân viên mới
let createStaff = async (name, dob, phone, title, email, address, sex) => {
  // Sử dụng phương thức create của Info để tạo một nhân viên mới
  let newStaff = await Info.create({
    NAME: name,
    DOB: dob,
    PHONE: phone,
    TITLE: title,
    EMAIL: email,
    ADDRESS: address,
    SEX: sex
  });
  return newStaff; // Trả về thông tin về nhân viên đã tạo
};

// Hàm getStaffById: Lấy thông tin về một nhân viên dựa trên ID
let getStaffById = async (id) => {
  let staff = await findStaffById(id); // Tìm kiếm nhân viên
  return staff; // Trả về thông tin về nhân viên
};

// Hàm updateStaff: Cập nhật thông tin của một nhân viên dựa trên ID
let updateStaff = async (id, newData) => {
  let staff = await findStaffById(id); // Tìm kiếm nhân viên
  if (!staff) {
    return null; // Nếu không tìm thấy nhân viên, trả về null
  }
  // Sử dụng phương thức update của Info để cập nhật thông tin của nhân viên
  await Info.update(newData, {
    where: {
      ID: id
    }
  });
  let updatedStaff = await findStaffById(id); // Tìm lại nhân viên sau khi cập nhật
  return updatedStaff; // Trả về nhân viên đã được cập nhật
};

// Hàm deleteStaff: Xóa một nhân viên dựa trên ID
let deleteStaff = async (id) => {
  let staff = await findStaffById(id); // Tìm kiếm nhân viên
  if (!staff) {
    return null; // Nếu không tìm thấy nhân viên, trả về null
  }
  // Sử dụng phương thức destroy của Info để xóa nhân viên
  await Info.destroy({
    where: {
      ID: id
    }
  });
  return {}; // Trả về một đối tượng trống để biểu thị nhân viên đã được xóa thành công
};

// Xuất các hàm để có thể sử dụng ở các tệp khác
module.exports = {
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
