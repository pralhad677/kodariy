const CatchAsync = require("../utils/CatchAsync");
const Admin = require('../model/admin')


exports.post=CatchAsync(async(req,res,next)=>{
    let {name,email,password} = req.body
    console.log(name,email,password)
    let dataInstance = new Admin({
        name,
        email,
        password 
        
    })
    let createdData = await dataInstance.save()
    res.status(200).json({
        message:'success',
        createdData
    })
})

exports.adminLogin=CatchAsync(async(req,res,next)=>{

    let {email,password} = req.body
    console.log(email,password)
    let dbData = await Admin.find({email:email})
    console.log(dbData)
    let data = dbData.find(item =>item.email === email)
    console.log(data)
    if(!data){
        return res.status(400).json({
            message:'Invalid email'
        })
    }
    let matchPassword =data.correctPassword(password,data.password)
    let pendingMatchPass = await matchPassword
    console.log('matchPassword',pendingMatchPass)
    if(!pendingMatchPass){
        return res.status(400).json({
            message:'password is not matched'
        })
    }
    res.status(200).json({ 
        message:'success',
        id:data._id
    })
})