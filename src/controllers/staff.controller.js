'use strict';

const { createStaff, getStaffById, updateStaff, deleteStaff } = require("../services/staff.service");

const { OK } = require('../helpers/index');

class StaffController {
  async createStaffController(req, res, next) {
    try {
      let { name, dob, phone, title, email, point, address } = req.body;

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

  async getStaffController(req, res, next) {
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

  async updateStaffController(req, res, next) {
    try {
      let id = req.params.id;
      let newData = req.body;

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

  async deleteStaffController(req, res, next) {
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

module.exports = new StaffController();

