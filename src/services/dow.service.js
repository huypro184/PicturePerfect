'use strict';

// Import model Dow từ thư mục models
let { Dow } = require("../models/dow");

// Hàm findDowById: Tìm kiếm một bản ghi trong bảng DOW dựa trên ID
let findDowById = async (id) => {
  return await Dow.findByPk(id);
}

// Hàm createDow: Tạo một bản ghi mới trong bảng DOW
let createDow = async (startTime, endTime, day, idInfo) => {
  // Sử dụng phương thức create của Dow để tạo một bản ghi mới
  let result = await Dow.create({
    START_TIME: startTime,
    END_TIME: endTime,
    DAY: day,
    ID_INFO: idInfo
  });
  return result; // Trả về bản ghi đã được tạo
}

// Hàm updateDow: Cập nhật thông tin của một bản ghi trong bảng DOW dựa trên ID
let updateDow = async (id, newStartTime, newEndTime, newDay, newIdInfo) => {
  let dow = await findDowById(id); // Tìm kiếm bản ghi
  if (!dow) {
    return null; // Nếu không tìm thấy bản ghi, trả về null
  }
  // Sử dụng phương thức update của Dow để cập nhật thông tin của bản ghi
  await dow.update({
    START_TIME: newStartTime,
    END_TIME: newEndTime,
    DAY: newDay,
    ID_INFO: newIdInfo
  });
  return dow; // Trả về bản ghi đã được cập nhật
}

// Hàm deleteDow: Xóa một bản ghi trong bảng DOW dựa trên ID
let deleteDow = async (id) => {
  let dow = await findDowById(id); // Tìm kiếm bản ghi
  if (!dow) {
    return null; // Nếu không tìm thấy bản ghi, trả về null
  }
  // Sử dụng phương thức destroy của Dow để xóa bản ghi
  await dow.destroy();
  return {}; // Trả về một đối tượng trống để biểu thị bản ghi đã được xóa thành công
}

// Xuất các hàm để có thể sử dụng ở các tệp khác
module.exports = {
  findDowById,
  createDow,
  updateDow,
  deleteDow,
};
