const express = require('express');

const app = express()

const bodyParser = require('body-parser');
const userRouter = require('./router/user');
const fileRouter = require('./router/file');
const mailRouter = require('./router/mail')
const adminROuter = require('./router/admin')
const GlobalErrorController = require('./controller/GlobalErrorController');
const AppError = require('./utils/AppError')
const path = require('path')
const multer = require('multer')
const cors = require('cors')
const compression = require('compression')


app.use(cors({origin: 'http://localhost:3000'})); 

process.on('uncaughtException',err => { 
    console.log('Uncaught Exception occurs'); 
    console.log(err.message,err.name); 
    process.exit(1);
})

// const storage = multer.diskStorage({
//     destination:'./public/Images'
//     ,
//     file:(req,file,cb)=>{
//         cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
//     }

// })

// const upload=multer({ 
//     storage
// }).single('Image')

app.use(express.static(path.join(__dirname, 'public')));


// app.use(bodyParser.json({limit:'10mb'}));

app.use(bodyParser.urlencoded()); 

app.use(bodyParser.json());


// app.use(compression())

app.use('/api/v1/users',userRouter)//mounting a router
app.use('/File',fileRouter)
app.use('/mail',mailRouter)
app.use('/admin',adminROuter)

// app.post('/File',upload,(req,res,next)=>{
//     // upload((req,res,next)=>{
//     //       console.log('success')
//     // let file = req.file
//     // console.log(file)
//     // res.status(200).json({
//     //     message:'success'
//     // })
//     // })
//     console.log('success')
//     let file = req.file
//     console.log(file)
//     res.status(200).json({
//         message:'success'
//     })
// })



app.use('*',(req,res,next )=> {
   next(new AppError('Page Not Found',404))
})


app.use(GlobalErrorController)





process.on('unhandledRejection',(err) => {
    console.log(err.name,err.message);
    process.exit(1);
});



module.exports = app;