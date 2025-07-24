const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
        },
        lastName:{
            type:String,
            required:true
        },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    company:{
        type:String
    },
    role:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})
const User=new mongoose.model("User",userSchema);
module.exports={User};