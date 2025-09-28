const mongoose = require('mongoose');
const FoodPartner = require('../model/foodpartner.model')

const foodSchema = new mongoose.Schema({
  Title:{
    type: String,
    required: true
  },
  video:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  foodPartner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"FoodPartner"
  }
})

const Foodmodel = mongoose.model("Food", foodSchema);
module.exports = Foodmodel;