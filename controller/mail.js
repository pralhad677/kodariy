const CatchAsync = require("../utils/CatchAsync");
const sendingEmail = require("../utils/Email");

exports.post = CatchAsync(async(req,res,next)=>{
    let {name,email,text} = req.body
    console.log(email,text)
    sendingEmail(email,text)
    res.status(200).json({
        message:'success'
    })
})