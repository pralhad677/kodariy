const CatchAsync = require("../utils/CatchAsync");

exports.post=CatchAsync(async(req,res,next)=>{
    res.status.json({
        message:'success'
    })
})