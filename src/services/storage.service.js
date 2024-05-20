'use strict';

const { Storage } = require("../models");

// Hàm findStorageByName: Tìm kiếm một mục trong kho dựa trên tên
let findStorageByName = async (name) => {
  return await Storage.findOne({ where: { NAME: name } });
}

// Hàm createStorage: Tạo một mục trong kho mới
let createStorage = async (ID_PRODUCT, NAME, QUANTITY, IMPORT, EXPORT) => {
  return await Storage.create({
    ID_PRODUCT,
    NAME,
    QUANTITY,
    IMPORT,
    EXPORT
  });
}

// Hàm getStorageByName: Lấy thông tin về một mục trong kho dựa trên tên
let getStorageByName = async (name) => {
  let getStorage = await findStorageByName(name);
  return getStorage;
}

// Hàm updateStorage: Cập nhật thông tin của một mục trong kho dựa trên tên
let updateStorage = async (name, newData) => {
  let getStorage = await findStorageByName(name);
  if (!getStorage) {
    return null;
  }
  await Storage.update(newData, {
    where: {
      NAME: name
    }
  });
  let updatedStorage = await findStorageByName(name);
  return updatedStorage;
}

// Hàm deleteStorage: Xóa một mục trong kho dựa trên tên
let deleteStorage = async (name) => {
  let getStorage = await findStorageByName(name);
  if (!getStorage) {
    return null;
  }
  await Storage.destroy({
    where: {
      NAME: name
    }
  });
  return {};
}

// Hàm getStorageHistory: Lấy lịch sử nhập/xuất kho
let getStorageHistory = async () => {
  return await Storage.findAll({
    attributes: ['NAME', 'IMPORT', 'EXPORT'],
    order: [['IMPORT', 'ASC']]
  });
}

module.exports = {
  createStorage,
  getStorageByName,
  updateStorage,
  deleteStorage,
  getStorageHistory,
};
