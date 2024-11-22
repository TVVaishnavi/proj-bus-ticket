const ticketservice=require("../service/ticket")
const buses=require("../models/bus")

const bookticket=async(req,res)=>{
    try {
        const ticketdetails=req.body
        const busNumber=ticketdetails.busNumber
        const availability=await buses.findOne({busNumber})
        if(availability.avaiableSeat.length>0 && ticketdetails.seatcount<=availability.avaiableSeat.length){
           const ticket=await ticketservice.bookticket(ticketdetails,availability.date,availability.avaiableSeat)
           const update=await ticketservice.updatebusticket(ticketdetails.seatcount,busNumber)
           res.status(201).json({ticket:ticket,update:update,"msg":"ticket successfully booked"})
        }else{
           res.json({"msg":"seat are full"})
        }
    } catch (err) {
        console.log(err)
        res.json({err:err,message:" oofhs! something wrong"})
    }
    
}

module.exports={bookticket}