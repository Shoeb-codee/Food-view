const foodmodel = require('../model/food.model')
const { create } = require('../model/foodpartner.model')

const createFood = async (req, res) =>{
res.send("Foood Item Created")
}

module.exports = {
  createFood
}