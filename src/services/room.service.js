'use strict';

const { Room, Info } = require('../models'); // Điều chỉnh import

// Hàm tạo mới một phòng
let createRoom = async (ID_INFO, SLOTS, STATUS, CHECK_IN, CHECK_OUT, DAY_CHECKIN, DAY_CHECKOUT, SERVICE) => {
  return await Room.create({
    ID_INFO,
    SLOTS,
    STATUS,
    CHECK_IN,
    CHECK_OUT,
    DAY_CHECKIN,
    DAY_CHECKOUT,
    SERVICE
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

// Hàm lấy danh sách các phòng cùng trạng thái của chúng
let getRooms = async () => {
  return await Room.findAll();
}

// Hàm lấy chi tiết một phòng bao gồm thông tin khách hàng, dịch vụ đã chọn, và thời gian check-in/check-out dự kiến
let getRoomDetails = async (id) => {
  return await Room.findByPk(id, {
    include: [{
      model: Info,
      attributes: ['NAME', 'EMAIL', 'PHONE']
    }]
  });
}

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getRooms,
  getRoomDetails,
};
