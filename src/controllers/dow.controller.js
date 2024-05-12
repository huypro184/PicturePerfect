'use strict';

const { createDow, updateDow, deleteDow } = require("../services/dow.service");
const { dowValidator } = require('../services/dowValidator.service');

class DowController {
  async createDowController(req, res, next) {
    try {
      let { startTime, endTime, day, idInfo } = req.body;

      let validationError = await dowValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      let result = await createDow(startTime, endTime, day, idInfo);

      return res.status(201).json({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  async updateDowController(req, res, next) {
    try {
      let id = req.params.id;
      let newData = req.body;

      let validationError = await dowValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }

      let result = await updateDow(id, newData);

      if (!result) {
        return res.status(404).json({ message: "Not found Dow" });
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

  async deleteDowController(req, res, next) {
    try {
      let id = req.params.id;

      let result = await deleteDow(id);

      if (!result) {
        return res.status(404).json({ message: "Not found Dow" });
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

module.exports = new DowController();
