const express=require("express")
const cors=require("cors")
const authMiddleware=require("../middlewares/auth")
const buscontroler= require("../controller/bus")
const { bookticket } = require("../controller/ticket")

const router=express.Router()

router.use(cors())
      

router.route("/bus")
   .post(buscontroler.createbus)
   .delete(authMiddleware.authenticateToken,buscontroler.deletebus)
   .put(authMiddleware.authenticateToken,buscontroler.updatebus)

router.route("/busdetails")
  .get(authMiddleware.authenticateToken,buscontroler.getbusdetails)
  .post(authMiddleware.authenticateToken,buscontroler.searchbus)

router.route("/bus/ticket")
  .post(bookticket)

module.exports=router