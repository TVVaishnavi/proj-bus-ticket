const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const err=require("../models/error");



const error=async(errname,errmsg)=>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const createnewerror=new err({
        datetime:dateTime,
        id:uuid(),
        errname:errname,
        errmsg:errmsg
    })
    const saveerror=await createnewerror.save()
    return saveerror

}
const errEvents = async (name,message) => {
    try {
        const errEvent=await error(name,message)
    } catch (err) {
        console.log(err);
    }
}

const blocker=(err,req,res,next)=>{
    errEvents(err.name,err.message)
    console.log(`${err.name} ${err.message}`)
    next()
}

module.exports={blocker}