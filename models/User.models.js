const mongoose=require("mongoose");

const User=new mongoose.Schema({
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

module.exports={User};