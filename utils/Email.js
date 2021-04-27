const nodemailer = require('nodemailer')
const AppError = require('./AppError')

const dotenv = require('dotenv')
const { getMaxListeners } = require('../app')


// dotenv.config({path:'./dotenv.env'})
dotenv.config({path:'../dot.env'})

console.log(process.env.EMAIL==='gorkhalicoder@gmail.com')
console.log(process.env.PASSWORD)

const transport =nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

// const mailOptions= email=>( {
//     from:process.env.EMAIL,
//     to:email,
//     subject:'testing',
//     text:'k x khabar'
// })
let sendingEmail = (email,text)=>{
    console.log('email in Email.js',email)
    console.log('text',text)
 transport.sendMail({
    from:process.env.EMAIL,
    to:"gorkhalicoder1@gmail.com",
    subject:'testing',
    text:text
},(err,data)=>{
    if(err){
        new AppError('error occurs',500)
    }
    console.log('success')
})
}
module.exports= sendingEmail
// sendingEmail('gorkhalicoder1@gmail.com')