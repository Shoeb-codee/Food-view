const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const foodPartnerRoutes = require('./routes/food-partner.routes')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
  })
)

app.use('/user',authRoutes)
app.use('/foodItem',foodRoutes)
app.use('/foodPartner',foodPartnerRoutes)


app.get('/',(req,res)=>{
  res.send("This is me ")
})






module.exports = app;