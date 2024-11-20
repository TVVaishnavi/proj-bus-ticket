const express=require("express")
const router=express.Router()
const app=express()
const {verificationlogin}=require("../controller/admincontroller")

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

router.route("/")
.post(verificationlogin)



module.exports=router