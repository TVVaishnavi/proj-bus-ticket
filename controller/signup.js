const userservice=require("../service/signup")

const createuser=async(req,res)=>{
    try{
       const userdata=req.body
       const user=await userservice.createuser(userdata)
       res.status(201).json({user:user,"message":"user created successfully"})
    }catch(err){
        console.log(err)
        console.log("nmahjehj")
        res.status(400).json({"msg":err.message})
    }

}
module.exports={createuser}