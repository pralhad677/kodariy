const mongoose = require('mongoose')
const AppError = require('../utils/AppError')
const bcrypt = require('bcryptjs')


const adminSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    password:{
        type:String,
        required:[true,'name is required']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: async function(value)  {
            try {
                const result = await this.constructor.findOne({ email: value })
                if (result) throw new Error(`duplicity detected: email : ${value}`);
            } catch (error) {
                console.log(error)
                throw new AppError(error.message,400);
            }
        }
    }
})

adminSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    // Delete passwordConfirm field
    // this.confirmPassword = undefined;
    next();
  });

  adminSchema.methods.correctPassword = async function(
        candidatePassword,
        userPassword
      ) {
        return await bcrypt.compare(candidatePassword, userPassword);
      }; 

const Model = mongoose.model('Admin',adminSchema)

module.exports = Model