'use strict';

const { createProduct, getProductByName, updateProduct, deleteProduct } = require("../services/f&b.service");
const { productValidator } = require('../services/f&bValidator.service');
const { OK } = require('../helpers/index');

class ProductController {
  async createProductController(req, res, next) {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu sản phẩm trước khi tạo
      let validationError = await productValidator(req);
      if (validationError !== null) {
        return res.status(400).send({ message: validationError });
      }
      
      let productName = req.body.productName;
      let unitPrice = req.body.unitPrice;

      // Gọi hàm createProduct từ f&b.service để tạo sản phẩm mới
      let result = await createProduct(productName, unitPrice);

      return res.send({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
  }

  async getProductController(req, res, next) {
    try {
      let productName = req.params.productName;

      // Gọi hàm getProductByName từ f&b.service để lấy thông tin sản phẩm
      let result = await getProductByName(productName);

      if (!result) {
        return res.status(404).send({message: "Not found Product"});
      }

      return res.send({result});
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
  }

  async updateProductController(req, res, next) {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu sản phẩm trước khi cập nhật
      let validationError = await productValidator(req);
      if (validationError !== null) {
        return res.status(400).send({ message: validationError });
      }
      
      let productName = req.params.productName;
      let newUnitPrice = req.body.unitPrice;

      // Gọi hàm updateProduct từ f&b.service để cập nhật thông tin sản phẩm
      let result = await updateProduct(productName, newUnitPrice);

      if (!result) {
        return res.status(404).send({message: "Not found Product"});
      }

      return res.send({
        message: "Update successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
  }

  async deleteProductController(req, res, next) {
    try {
      let productName = req.params.productName;

      // Gọi hàm deleteProduct từ f&b.service để xóa sản phẩm
      let result = await deleteProduct(productName);

      if (!result) {
        return res.status(404).send({message: "Not found Product"});
      }

      return res.send({
        message: "Delete successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
  }
}

module.exports = new ProductController();

