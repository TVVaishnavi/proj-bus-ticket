const express=require("express")
const cors=require("cors")
const authMiddleware=require("../middlewares/auth")
const buscontroler= require("../controller/bus")
const ticketcontroller = require("../controller/ticket")

const router=express.Router()

router.use(cors())
      

router.route("/bus")
   .post(authMiddleware.authenticateToken,buscontroler.createbus)
   .delete(authMiddleware.authenticateToken,buscontroler.deletebus)
   .put(authMiddleware.authenticateToken,buscontroler.updatebus)

router.route("/busdetails")
  .get(authMiddleware.authenticateToken,buscontroler.getbusdetails)
  .post(authMiddleware.authenticateToken,buscontroler.searchbus)

router.route("/bus/bookticket")
  .post(authMiddleware.authenticateToken,ticketcontroller.bookticket)

router.route("/bus/ticketcancel")
  .post(authMiddleware.authenticateToken,ticketcontroller.canacelticket)

router.route("/bus/ticket")
  .get(authMiddleware.authenticateToken,ticketcontroller.getticket)
module.exports=router