const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcrypt")
const userModel = require("./models/user")
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/swiggyDb?retryWrites=true&w=majority&appName=Cluster0")






    app.post("/usersignup",(req,res)=>{
        let input=req.body
        let hashedpassword=bcrypt.hashSync(input.password,10)
        //console.log(hashedpassword)
        input.password=hashedpassword
        console.log(input) 
        let result= new userModel(input)
        result.save()
        res.json({"status":"success"})
        
    })


app.listen(4040,()=>{

    console.log("server started")
})