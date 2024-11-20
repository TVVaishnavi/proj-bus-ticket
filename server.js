const express=require("express")
const app=express()
const PORT=3000;
const signup=require("./Routes/signup")
const login=require("./Routes/login")
// mongoose
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/appdb')
const UserSchema = new mongoose.Schema({
    name:String
})
const usermodel=mongoose.model("user",UserSchema)

app.get("/",(req,res)=>{
    usermodel.find().then((user)=>{
        res.json(user)
        console.log(user)
    }).catch((err)=>{
        console.log(err)
    })
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/signup",signup)
app.use("/login",login)

app.listen(PORT, ()=>{
    console.log(`Server Running ${PORT}`);
})