// Import model Product từ thư mục models
let { Product } = require("../models/product");

// Hàm findProductByName: Tìm kiếm một sản phẩm dựa trên tên
let findProductByName = async (name) => {
  return await Product.findOne({ where: { NAME: name } });
}

// Hàm createProduct: Tạo một sản phẩm mới
let createProduct = async (productName, unitPrice) => {
  // Sử dụng phương thức findOrCreate của Product để tạo hoặc tìm một sản phẩm đã tồn tại
  let result = await Product.findOrCreate({
    where: {
      NAME: productName,
      UNIT_PRICE: unitPrice,
    }
  });
  return result[0]; // Trả về sản phẩm đã tạo hoặc đã tồn tại
}

// Hàm getProductByName: Lấy thông tin về một sản phẩm dựa trên tên
let getProductByName = async (productName) => {
  let getProduct = await findProductByName(productName); // Tìm kiếm sản phẩm
  return getProduct; // Trả về thông tin về sản phẩm
}

// Hàm updateProduct: Cập nhật thông tin của một sản phẩm dựa trên tên
let updateProduct = async (productName, newUnitPrice) => {
  let getProduct = await findProductByName(productName); // Tìm kiếm sản phẩm
  if (!getProduct) {
    return null; // Nếu không tìm thấy sản phẩm, trả về null
  }
  // Sử dụng phương thức update của Product để cập nhật thông tin của sản phẩm
  await Product.update({
    UNIT_PRICE: newUnitPrice,
  }, {
    where: {
      NAME: productName
    }
  });
  let updatedProduct = await findProductByName(productName); // Tìm lại sản phẩm sau khi cập nhật
  return updatedProduct; // Trả về sản phẩm đã được cập nhật
}

// Hàm deleteProduct: Xóa một sản phẩm dựa trên tên
let deleteProduct = async (productName) => {
  let getProduct = await findProductByName(productName); // Tìm kiếm sản phẩm
  if (!getProduct) {
    return null; // Nếu không tìm thấy sản phẩm, trả về null
  }
  // Sử dụng phương thức destroy của Product để xóa sản phẩm
  await Product.destroy({
    where: {
      NAME: productName
    }
  });
  return {}; // Trả về một đối tượng trống để biểu thị sản phẩm đã được xóa thành công
}

// Xuất các hàm để có thể sử dụng ở các tệp khác
module.exports = {
  createProduct,
  getProductByName,
  updateProduct,
  deleteProduct,
};
