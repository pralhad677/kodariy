const mongoose = require('mongoose')
const AppError =require('../utils/AppError')


const fileSchema  = new mongoose.Schema({
    image:{
        type:String,
        required:[true,'image is required']

    },
    path:{
        type:String,
        required:[true,'path is required']
    },
    name:{
        type:String,
        required:[true,'path is required']
    }
})

fileSchema.pre('save',async function(next){
    try {
        let  found =  await this.constructor.findOne({ name:this.name })
        
        if (found) throw new Error(`duplicity image detected: name : ${this.name}`);
    } catch (error) {
        console.log(error)
        throw new AppError(error.message,400);
    }



    next()
})

const Model = mongoose.model('File',fileSchema)

module.exports = Model