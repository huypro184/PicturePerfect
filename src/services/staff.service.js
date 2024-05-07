'use strict';

// Import model Info từ thư mục models
const { Info } = require("../models/info");

// Hàm findStaffById: Tìm kiếm một staff dựa trên ID
let findStaffById = async (id) => {
  return await Info.findByPk(id);
}

// Hàm createStaff: Tạo một staff mới
let createStaff = async (name, dob, phone, title, email, point, address) => {
  // Sử dụng phương thức create của Info để tạo một staff mới
  let newStaff = await Info.create({
    NAME: name,
    DOB: dob,
    PHONE: phone,
    TITLE: title,
    EMAIL: email,
    POINT: point,
    ADDRESS: address
  });
  return newStaff; // Trả về thông tin về staff đã tạo
}

// Hàm getStaffById: Lấy thông tin về một staff dựa trên ID
let getStaffById = async (id) => {
  let staff = await findStaffById(id); // Tìm kiếm staff
  return staff; // Trả về thông tin về staff
}

// Hàm updateStaff: Cập nhật thông tin của một staff dựa trên ID
let updateStaff = async (id, newData) => {
  let staff = await findStaffById(id); // Tìm kiếm staff
  if (!staff) {
    return null; // Nếu không tìm thấy staff, trả về null
  }
  // Sử dụng phương thức update của Info để cập nhật thông tin của staff
  await Info.update(newData, {
    where: {
      ID: id
    }
  });
  let updatedStaff = await findStaffById(id); // Tìm lại staff sau khi cập nhật
  return updatedStaff; // Trả về staff đã được cập nhật
}

// Hàm deleteStaff: Xóa một staff dựa trên ID
let deleteStaff = async (id) => {
  let staff = await findStaffById(id); // Tìm kiếm staff
  if (!staff) {
    return null; // Nếu không tìm thấy staff, trả về null
  }
  // Sử dụng phương thức destroy của Info để xóa staff
  await Info.destroy({
    where: {
      ID: id
    }
  });
  return {}; // Trả về một đối tượng trống để biểu thị staff đã được xóa thành công
}

// Xuất các hàm để có thể sử dụng ở các tệp khác
module.exports = {
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
