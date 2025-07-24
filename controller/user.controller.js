const {User}=require("../models/User.models");
const addUser=async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:"Something went wrong!",error});
    }
}

const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.send(users);
    }
    catch(error){
        res.status(500).json({message:"Something went wrong"})
    }
}

module.exports={addUser,getUsers};