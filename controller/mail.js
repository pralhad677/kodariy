const CatchAsync = require("../utils/CatchAsync");
const sendingEmail = require("../utils/Email");

exports.post = CatchAsync(async(req,res,next)=>{
    let {subject,email,text} = req.body
    console.log(email,text,subject)
    sendingEmail(email,text,subject)
    res.status(200).json({
        message:'success'
    })
})