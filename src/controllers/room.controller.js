'use strict';

const { createRoom, updateRoom, deleteRoom } = require("../services/room.service");
const { roomValidator } = require('../services/roomValidator.service');

class RoomController {
  // Phương thức tạo mới một phòng
  async createRoomController(req, res, next) {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu phòng trước khi tạo
      let validationError = await roomValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }
      
      let { ID_FILM, ID_INFO, SLOT, DAY } = req.body;

      // Gọi hàm tạo mới phòng từ service
      let result = await createRoom(ID_FILM, ID_INFO, SLOT, DAY);

      return res.status(201).json({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức cập nhật thông tin một phòng dựa trên ID
  async updateRoomController(req, res, next) {
    try {
      let id = req.params.id;
      let newData = req.body;

      // Kiểm tra tính hợp lệ của dữ liệu phòng trước khi cập nhật
      let validationError = await roomValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      // Gọi hàm cập nhật thông tin phòng từ service
      let result = await updateRoom(id, newData);

      if (!result) {
        return res.status(404).json({ message: "Not found Room" });
      }

      return res.status(200).json({
        message: "Update successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức xóa một phòng dựa trên ID
  async deleteRoomController(req, res, next) {
    try {
      let id = req.params.id;

      // Gọi hàm xóa phòng từ service
      let result = await deleteRoom(id);

      if (!result) {
        return res.status(404).json({ message: "Not found Room" });
      }

      return res.status(200).json({
        message: "Delete successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }
}

module.exports = new RoomController();
