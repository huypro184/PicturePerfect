'use strict';

const { createStaff, getStaffById, updateStaff, deleteStaff } = require("../services/staff.service");
const { dowValidator } = require('../services/dowValidator.service');

const { OK } = require('../helpers/index');

class DowController {
  async createDowController(req, res, next) {
    try {
      let { name, dob, phone, title, email, point, address } = req.body;

      // Gọi hàm dowValidator để kiểm tra tính hợp lệ của dữ liệu Dow trước khi tạo nhân viên mới
      let validationError = await dowValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      // Gọi hàm createStaff từ staff.service để tạo nhân viên mới
      let result = await createStaff(name, dob, phone, title, email, point, address);

      return res.status(201).json({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Server Error"});
    }
  }

  async getDowController(req, res, next) {
    try {
      let id = req.params.id;

      // Gọi hàm getStaffById từ staff.service để lấy thông tin nhân viên
      let result = await getStaffById(id);

      if (!result) {
        return res.status(404).json({message: "Not found Staff"});
      }

      return res.status(200).json({result});
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Server Error"});
    }
  }

  async updateDowController(req, res, next) {
    try {
      let id = req.params.id;
      let newData = req.body;

      // Gọi hàm dowValidator để kiểm tra tính hợp lệ của dữ liệu Dow trước khi cập nhật thông tin nhân viên
      let validationError = await dowValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      // Gọi hàm updateStaff từ staff.service để cập nhật thông tin nhân viên
      let result = await updateStaff(id, newData);

      if (!result) {
        return res.status(404).json({message: "Not found Staff"});
      }

      return res.status(200).json({
        message: "Update successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Server Error"});
    }
  }

  async deleteDowController(req, res, next) {
    try {
      let id = req.params.id;

      // Gọi hàm deleteStaff từ staff.service để xóa nhân viên
      let result = await deleteStaff(id);

      if (!result) {
        return res.status(404).json({message: "Not found Staff"});
      }

      return res.status(200).json({
        message: "Delete successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Server Error"});
    }
  }
}

module.exports = new DowController();
