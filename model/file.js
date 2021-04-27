const mongoose = require('mongoose')


const fileSchema  = new mongoose.Schema({
    image:{
        type:String,
        required:[true,'image is required']

    },
    path:{
        type:String,
        required:[true,'path is required']
    }
})

const Model = mongoose.model('File',fileSchema)

module.exports = Model