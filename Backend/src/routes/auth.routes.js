const express = require('express');
const authController = require('../controllers/auth.controller')
const router = express.Router()

// User Auth Routes
router.post('/register', authController.registerUser )
router.post('/login',authController.loginUser)
router.get('/logout',authController.logOut)

// FoodPartner Routes
router.post('/register-partner', authController.registerFoodPartner )
router.post('/login-partner', authController.loginFoodPartner)
router.get('/logout-partner', authController.logoutFoodPartner)



module.exports = router;
