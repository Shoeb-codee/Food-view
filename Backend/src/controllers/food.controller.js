const foodmodel = require("../model/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

const createFood = async (req, res) => {
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );
  console.log(fileUploadResult);

  res.send("YES YES YES");
};

module.exports = {
  createFood,
};
