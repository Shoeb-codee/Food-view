const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use('/user',authRoutes)
app.use('/foodpartner',authRoutes)
app.use('/foodItem',foodRoutes)


app.get('/',(req,res)=>{
  res.send("This is me ")
})






module.exports = app;