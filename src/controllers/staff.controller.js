'use strict';

const { createStaff, getStaffById, updateStaff, deleteStaff } = require("../services/staff.service");
const { staffValidator } = require('../services/staffValidator.service');

class StaffController {
  async createStaffController(req, res, next) {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu nhân viên trước khi tạo
      let validationError = await staffValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }
      
      let { NAME, DOB, PHONE, TITLE, EMAIL, ADDRESS, SEX } = req.body;

      // Gọi hàm createStaff từ staff.service để tạo nhân viên mới
      let result = await createStaff(NAME, DOB, PHONE, TITLE, EMAIL, ADDRESS, SEX);

      return res.status(201).json({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  async getStaffController(req, res, next) {
    try {
      let id = req.params.id;

      // Gọi hàm getStaffById từ staff.service để lấy thông tin nhân viên
      let result = await getStaffById(id);

      if (!result) {
        return res.status(404).json({ message: "Not found Staff" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  async updateStaffController(req, res, next) {
    try {
      let id = req.params.id;
      let newData = req.body;

      // Kiểm tra tính hợp lệ của dữ liệu nhân viên trước khi cập nhật
      let validationError = await staffValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      // Gọi hàm updateStaff từ staff.service để cập nhật thông tin nhân viên
      let result = await updateStaff(id, newData);

      if (!result) {
        return res.status(404).json({ message: "Not found Staff" });
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

  async deleteStaffController(req, res, next) {
    try {
      let id = req.params.id;

      // Gọi hàm deleteStaff từ staff.service để xóa nhân viên
      let result = await deleteStaff(id);

      if (!result) {
        return res.status(404).json({ message: "Not found Staff" });
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

module.exports = new StaffController();
