const express = require('express');
const FoodPartner = require('../model/foodpartner.model')
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

const authFoodPartnerMiddleware = async (req, res, next) =>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({
      message:"Please Login First"
    })
  }
try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const foodPartner = await FoodPartner.findOne({ _id: decoded.id })
    req.foodPartner = foodPartner
    next()
} catch (error) {
  return res.status(401).json({ //
    message: error.message
  })
}
}


async function authUserMiddleware(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id);

        req.user = user

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token"
        })

    }

}


module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware
}