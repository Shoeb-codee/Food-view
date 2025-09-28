const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const foodController = require('../controllers/food.controller')


router.post('/create-food',authMiddleware.authFoodPartnerMiddleware,foodController.createFood)


module.exports = router;

