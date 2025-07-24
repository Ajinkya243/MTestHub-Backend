const mongoose=require("mongoose");
const express=require("express");
require("dotenv").config();
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const port=process.env.PORT;
const{connectDB}=require("./config/db.connect");
const userRouter=require("./routes/user.routes");
const { User } = require("./models/User.models");

app.get("/",async(req,resp)=>{
    resp.json({message:"Server running"})
});

app.use("/api/user",userRouter);

connectDB().then(()=>{
    console.log("Database connected");
}).then(()=>{
    app.listen(port,async(req,res)=>{
        console.log("Express server running on",port)
    })
})

