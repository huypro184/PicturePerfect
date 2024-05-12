'use strict';

// Import model Dow từ thư mục models
const { Dow } = require("../models/dow");

// Hàm tìm Dow bằng ID
let findDowById = async (id) => {
  return await Dow.findByPk(id);
}

// Hàm tạo mới một Dow
let createDow = async (startTime, endTime, day, idInfo) => {
  // Sử dụng phương thức create của Dow để tạo một Dow mới
  let result = await Dow.create({
    START_TIME: startTime,
    END_TIME: endTime,
    DAY: day,
    ID_INFO: idInfo
  });
  return result; // Trả về Dow đã được tạo
}

// Hàm cập nhật thông tin một Dow
let updateDow = async (id, newStartTime, newEndTime, newDay, newIdInfo) => {
  let dow = await findDowById(id); // Tìm Dow
  if (!dow) {
    return null;
  }
  // Sử dụng phương thức update của Dow để cập nhật thông tin Dow
  await dow.update({
    START_TIME: newStartTime,
    END_TIME: newEndTime,
    DAY: newDay,
    ID_INFO: newIdInfo
  });
  return dow; // Trả về Dow đã được cập nhật
}

// Hàm xóa một Dow
let deleteDow = async (id) => {
  let dow = await findDowById(id); // Tìm Dow
  if (!dow) {
    return null;
  }
  // Sử dụng phương thức destroy của Dow để xóa Dow
  await dow.destroy();
  return {}; // Trả về một đối tượng trống để biểu thị Dow đã được xóa thành công
}

module.exports = {
  findDowById,
  createDow,
  updateDow,
  deleteDow,
};
