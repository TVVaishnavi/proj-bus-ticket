const express=require("express")
const cors=require("cors")
const userController=require("../controller/user")
const authMiddleware=require("../middlewares/auth")

const router=express.Router()

router.use(cors())

router.route("/user")
     .get(authMiddleware.authenticateToken,userController.getUser)

module.exports=router