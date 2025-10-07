const express = require('express');
const foodPartnerController = require('../controllers/food-partner.controller')


const { authUserMiddleware, authFoodPartnerMiddleware } = require('../middleware/auth.middleware');

const router = express.Router()
// food-partner/:id

router.get('/:id',authUserMiddleware,foodPartnerController.getFoodPartnerById)

module.exports = router;