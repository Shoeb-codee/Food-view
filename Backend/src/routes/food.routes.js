const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const foodController = require('../controllers/food.controller')
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage()
})


router.post('/create-food',authMiddleware.authFoodPartnerMiddleware,upload.single("video") ,foodController.createFood)


module.exports = router;

