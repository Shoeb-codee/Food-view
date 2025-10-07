const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const foodPartnerController = require("../controllers/food-partner.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/create-food",
  (req, res, next) => {
    console.log("Incoming request fields:", req.body, req.files);
    next();
  },
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  (req, res, next) => {
    next();
  },
  foodController.createFood
);

router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItem)

module.exports = router;
