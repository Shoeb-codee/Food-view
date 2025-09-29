const User = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const FoodPartner = require('../model/foodpartner.model');

const registerUser = async (req,res) => {
  const {fullname, email, password} = req.body;
  if(!fullname || !email || !password){
    console.log("Items missing!!!")
  }

  const isUserExisted = await User.findOne({email})
  if(isUserExisted){
    return res.status(400).json({
      message:"User already Exist"
    })
  }

  const hashedPassword = await bcrypt.hash(password,10);
  const user = User.create({
    fullname,
    email,
    password:hashedPassword
  })

  const token = jwt.sign({
    id: user._id,
  },process.env.JWT_SECRET
)

  res.cookie("token",token).status(201).json({
    message:"User Registered Successfully",
    user:{
      _id: user._id,
      email:user.email,
      fullname: user.fullname
    }
  })
}

const loginUser = async (req,res)=> {
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user){
   return res.status(400).json({
    message:"Invalid Email or Password"
   })
  }

  const isPasswordValid = await bcrypt.compare(password,user.password);
  if(!isPasswordValid){
    return res.status(400).json({
      message:"Invalid Email or Password"
    })
  }

  const token = jwt.sign({
    id:user._id
  },process.env.JWT_SECRET)



res.cookie("token",token).status(200).json({
  message:"User LoggedIn Successfully",
  user:{
    id:user._id,
    fullname:user.fullname,
    email:user.email
  }
})
}

const logOut = async (req,res) => {
  res.clearCookie("token")
  res.status(200).json({
    message:"User loggedOut Successfully"
  })
}

const registerFoodPartner = async (req,res) =>{
  const {name, email, password} = req.body;
  if(!name|| !email || !password){
    console.log("Items missing")
  }

  const isAccountExisted = await FoodPartner.findOne({email})
  if(isAccountExisted){
   return res.status(400).json({
    message:"User already Exist!"
   })
  }
  const hashedPassword = await bcrypt.hash(password,10)

  const foodPartner = await FoodPartner.create({
    name,
    email,
    password: hashedPassword
  })

  const token = jwt.sign({
    id:foodPartner._id
  },process.env.JWT_SECRET);

  res.cookie("token",token).status(200).json({
    message:"Food Partner registered successfully",
    foodPartner:{
      id: foodPartner._id,
      name: foodPartner.name
    }
  })
}

const loginFoodPartner = async (req, res) =>{
  const {email,password} = req.body;
  const foodPartner = await FoodPartner.findOne({email});
  if(!foodPartner){
   return res.status(400).json({
    message:"Invalid Email or Password"
   })
  }

  const isPasswordValid = await bcrypt.compare(password,foodPartner.password);
  if(!isPasswordValid){
    return res.status(400).json({
      message:"Invalid Email or Password"
    })
  }

  const token = jwt.sign({
    id:foodPartner._id
  },process.env.JWT_SECRET)



res.cookie("token",token).status(200).json({
  message:"User LoggedIn Successfully",
  user:{
    id:foodPartner._id,
    fullname:foodPartner.fullname,
    email:foodPartner.email
  }
})
}

const logoutFoodPartner = async (req, res) =>{
  res.clearCookie("token")
  res.status(200).json({
    message:"FoodPartner loggedOut Successfully"
  })
}


module.exports = {
  registerUser,
  loginUser,
  logOut,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner
}