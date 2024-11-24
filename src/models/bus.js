const mongoose=require("../config/dbconfig")

const busschema=new mongoose.Schema({
    busNumber:String,
    totalSeat:Number,
    avaiableSeat:[],
    bookedseat:[],
    inAC:Boolean,
    arrival:String,
    departure:String,
    stopings:[String],
    arivetime:String,
    departuretime:String,
    date:String
})
module.exports=mongoose.model("buses",busschema)