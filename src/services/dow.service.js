'use strict';

const { Dow } = require("../models");

// Hàm findDowById: Tìm Dow bằng ID
let findDowById = async (id) => {
  return await Dow.findByPk(id);
}

// Hàm createDow: Tạo mới một Dow
let createDow = async (startTime, endTime, day, idInfo) => {
  let result = await Dow.create({
    START_TIME: startTime,
    END_TIME: endTime,
    DAY: day,
    ID_INFO: idInfo
  });
  return result;
}

// Hàm updateDow: Cập nhật thông tin một Dow
let updateDow = async (id, newStartTime, newEndTime, newDay, newIdInfo) => {
  let dow = await findDowById(id);
  if (!dow) {
    return null;
  }
  await dow.update({
    START_TIME: newStartTime,
    END_TIME: newEndTime,
    DAY: newDay,
    ID_INFO: newIdInfo
  });
  return dow;
}

// Hàm deleteDow: Xóa một Dow
let deleteDow = async (id) => {
  let dow = await findDowById(id);
  if (!dow) {
    return null;
  }
  await dow.destroy();
  return {};
}

module.exports = {
  findDowById,
  createDow,
  updateDow,
  deleteDow,
};
