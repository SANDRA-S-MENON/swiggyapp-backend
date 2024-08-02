const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcrypt")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/swiggyDb?retryWrites=true&w=majority&appName=Cluster0")



app.get("/",(req,res)=>{
        res.json("hello")
    })
    

app.listen(4040,()=>{
    console.log("server started")
})