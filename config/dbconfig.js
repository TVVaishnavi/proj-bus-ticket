const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/bus_db",{
    serverSelectionTimeoutMS:5000
})
mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error:${err}`)
})

module.exports=mongoose;