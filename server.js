const express=require("express")
const app=express()
const PORT=process.env.PORT||3000
const cors=require("cors")
const signupRouter=require("./Routes/signup")
const bodyParser = require("body-parser")
const createAdminAccount=require("./script/admin")
const loginRouter=require("./Routes/login")
const userRouter=require("./Routes/user")
const busRouter=require("./Routes/bus")



app.use(bodyParser.json())
app.use(cors())

createAdminAccount()

app.use("/user",signupRouter)
app.use("/auth",loginRouter)
app.use("/api",userRouter,busRouter)

app.listen(PORT,  ()=>{
    console.log('server is running')
})