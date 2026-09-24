const express=require("express"); //loading the express => creating the server then we will start the server in server.js file 
const userModel=require("./models/user.model")
const cookieParser=require('cookie-parser')
const authRouter=require('./routes/auth.routes')
const musicRouter=require('./routes/music.routes')


//using a middleware
const app=express();
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.use('/api/music',musicRouter)


module.exports=app