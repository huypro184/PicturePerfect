'use strict';

const { createStorage, getStorageByName, updateStorage, deleteStorage, getStorageHistory } = require("../services/storage.service");
const { storageValidator } = require('../services/storageValidator.service');

class StorageController {
  async createStorageController(req, res, next) {
    try {
      let validationError = await storageValidator(req);
      if (validationError !== null) {
        return res.status(400).send({ message: validationError });
      }
      
      let { ID_PRODUCT, NAME, QUANTITY, IMPORT, EXPORT } = req.body;

      let result = await createStorage(ID_PRODUCT, NAME, QUANTITY, IMPORT, EXPORT);

      return res.status(201).send({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({ error: "Server Error" });
    }
  }

  async getStorageController(req, res, next) {
    try {
      let name = req.params.name;

      let result = await getStorageByName(name);

      if (!result) {
        return res.status(404).send({ message: "Not found Storage item" });
      }

      return res.send({ result });
    } catch (error) {
      return res.status(500).send({ error: "Server Error" });
    }
  }

  async updateStorageController(req, res, next) {
    try {
      let validationError = await storageValidator(req);
      if (validationError !== null) {
        return res.status(400).send({ message: validationError });
      }
      
      let name = req.params.name;
      let newData = req.body;

      let result = await updateStorage(name, newData);

      if (!result) {
        return res.status(404).send({ message: "Not found Storage item" });
      }

      return res.send({
        message: "Update successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({ error: "Server Error" });
    }
  }

  async deleteStorageController(req, res, next) {
    try {
      let name = req.params.name;

      let result = await deleteStorage(name);

      if (!result) {
        return res.status(404).send({ message: "Not found Storage item" });
      }

      return res.send({
        message: "Delete successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({ error: "Server Error" });
    }
  }

  async getStorageHistoryController(req, res, next) {
    try {
      let result = await getStorageHistory();
      return res.status(200).send({
        message: "Fetch successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({ error: "Server Error" });
    }
  }
}

module.exports = new StorageController();
