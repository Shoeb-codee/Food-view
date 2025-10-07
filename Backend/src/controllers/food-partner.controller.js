const foodPartnerModel = require('../model/foodpartner.model');
const foodModel = require('../model/food.model');


async function getFoodPartnerById(req, res) {
  const foodPartnerId = req.foodPartnerId || req.params.id; // Use ID from middleware or params

  if (!foodPartnerId) {
    return res.status(400).json({ message: "Food partner ID is required" });
  }

  const foodPartner = await foodPartnerModel.findById(foodPartnerId);
  const foodItemsByFoodPartner = await foodModel.find({ foodPartner: foodPartnerId });

  if (!foodPartner) {
    return res.status(404).json({ message: "Food partner not found" });
  }

  res.status(200).json({
    message: "Food partner retrieved successfully",
    foodPartner: {
      ...foodPartner.toObject(),
      foodItems: foodItemsByFoodPartner,
    },
  });
}



module.exports = {
  getFoodPartnerById,
}