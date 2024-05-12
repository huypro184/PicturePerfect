'use strict';

const { Room } = require("../models/room");

// Hàm tạo mới một phòng
let createRoom = async (ID_FILM, ID_INFO, SLOT, DAY) => {
  return await Room.create({
    ID_FILM,
    ID_INFO,
    SLOT,
    DAY
  });
}

// Hàm cập nhật thông tin một phòng dựa trên ID
let updateRoom = async (id, newData) => {
  let room = await Room.findByPk(id);
  if (!room) {
    return null;
  }
  await Room.update(newData, {
    where: {
      ID: id
    }
  });
  return await Room.findByPk(id);
}

// Hàm xóa một phòng dựa trên ID
let deleteRoom = async (id) => {
  let room = await Room.findByPk(id);
  if (!room) {
    return null;
  }
  await Room.destroy({
    where: {
      ID: id
    }
  });
  return {};
}

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
};
