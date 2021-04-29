const CatchAsync = require("../utils/CatchAsync");
const File = require('../model/file')
const fs = require('fs')
const path =require('path');
const Jimp = require('jimp')


exports.post = CatchAsync(async(req,res,next)=>{

    console.log('../public/Images/Image-April 26, 20211.png')
    console.log(process.cwd('public','Images')+'/public/Images')
    console.log(File)
    console.log('success')
    let file = req.file
    console.log('file',file)
    console.log(req.body.image)
    console.log('req.body',req.body)
    let newFile = new File({
        image:req.file.filename,
        path:req.file.path,
        name:req.file.originalname
    })
    let createdFile =await newFile.save()
    console.log(createdFile.path)
    res.status(201).json({
        message:'success',
        id:createdFile._id,
        path:createdFile.path,
        name:createdFile.name
        // path:createdFIle.path

    })
})

exports.getFile =CatchAsync(async (req,res,next)=>{
    let {id} = req.params
    let file = await File.findById(id)
    if(!file){
       return res.status(400).json({
            message:`no image with ${id} `
        })
    } 
    console.log(file)
    let filePath = file.path
    console.log(path.join(file.path))
    console.log(path.join('public','Images',))
    // fs.readFile(filePath,'encoding64')
    fs.readFile(filePath ,(err,data)=>{
        if(err){
            new Error('error occurs',500)
        }
        // console.log(new Buffer.from(data.data).toString("ascii"))
        console.log('before jimp',data)
        Jimp.read(data)
  .then(data => {
    return data
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      // set greyscale
      .write('lena-small-bw1.jpg'); // save
  })
        res.status(200).json({
            message:'success',
                // image: new Buffer.from(data.data).toString("ascii"),
            // data:Buffer.from(data,'base64'),
            data:data,
            // data1:data.toString('base64'),
           

            // data:new Buffer(data,'base64')
        })
    })
    // console.log()
    // res.status(200).json({
    //     message:'success'
    // })
})

exports.countAndReturn = CatchAsync(async (req,res,next)=>{
    let number = await File.countDocuments()
    let file = await File.find()

        console.log(number)
    res.status(200).json({
        totalDocument:number,
       file
    })
})

// exports.getByID=CatchAsync(async(req,res,next)=>{
//     let {id} = req.params
//     res.status(200).json({
//         id
//     })
// })