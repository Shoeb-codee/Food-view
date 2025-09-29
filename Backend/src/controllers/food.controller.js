const foodModel = require("../model/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

const createFood = async (req, res) => {
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  const foodItem = await foodModel.create({
    Title: req.body.Title,
    video: fileUploadResult.url,
    description: req.body.description,
    foodPartner: req.foodPartner._id
  })
  res.status(201).json({
    message:"food created successfully",
    food: foodItem
  })
};

async function getFoodItem(req,res) {
  const foodItems = await foodModel.find({})
  res.status(200).json({
    message:"Foood Items fetched successfully",
    foodItems
  })
}

module.exports = {
  createFood,
  getFoodItem
};
