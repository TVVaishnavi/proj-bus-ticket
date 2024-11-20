const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
let data = require("../user.json")
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//for signup
const verificationsignup = (req, res) => {
    const newuser = { name: req.body.name, email: req.body.email, Password: req.body.Password }
    const newdata = [...data, newuser]
    const filteredata = data.filter((us) => {
        if (us.email === newuser.email) return us
    }
    )
    console.log(filteredata)
    if (filteredata.length) {
        res.json({ "msg": "You are already signed" })
    }
    else {
        fs.writeFile("user.json", JSON.stringify(newdata), (err) => {
            if (err) console.log(err)
            console.log("file saved")
            res.json({ "process": "successfully finished" })
        })
    }
}

//for login&&filteredata.name===olduser.name
const verificationlogin = (req, res) => {
    const userdet={name: req.body.name, email: req.body.email, Password: req.body.Password}
    console.log(userdet)
    const verifiuser=data.filter((user)=>user.email===userdet.email)
    console.log(verifiuser)
    if(verifiuser.length){
        console.log(toString(verifiuser.Password)===toString(userdet.Password))
        if(toString(verifiuser.Password)===toString(userdet.Password)){
            res.json({"login":true,"user":{"name":verifiuser.name,"email":verifiuser.email}})
        }
        else{
            res.json({"msg":"incrruct password"})
        }
    }
    else{
        res.status(404).json({"msg":"account isn't exists"})
    }
    }
    

module.exports = { verificationsignup, verificationlogin }
