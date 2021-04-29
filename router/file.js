const express = require('express')
const router = express.Router();
const controller = require('../controller/file')
const multer = require('multer')
const path = require('path');
const AppError = require('../utils/AppError');

// const upload=multer({dest:'public/Images'})
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/Images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+'-'+new Date().toLocaleString('en-Us',{  year: 'numeric', month: 'long', day: 'numeric'})+Math.ceil(Math.random())+path.extname(file.originalname))
    }
  })

  const fileFilter = (req,file,cb)=>{
      if(file.mimetype.startsWith('image')){
            cb(null,true)
      }
      else{
          cb(new AppError('given file is not an image',400),false)
      }
  }
   
  var upload = multer(
      { 
          storage,
        fileFilter
    })

console.log('router')
router.route('/').post(upload.single('Image'),controller.post).get(controller.countAndReturn)
router.route('/:id').get(controller.getFile)
// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 

module.exports = router 