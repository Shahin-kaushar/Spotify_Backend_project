const mongoose=require("mongoose");


//use to describing the schema 
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        enum:['user','artist'],
        default:'user',
    }
})

//notemode is used to perform crud operations on dataset
const userModel=mongoose.model("user",userSchema)

/*CRUD Operation
create--> POST
read --> GET
update --> patch/put
delete --> DELETE
 */

//will use in app.js to perform crud operations using api 
module.exports=userModel;