const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    firstname : String,
    name : String,
    email : String,
    password : String,
    registration_date : {type : Date, default : new Date()},
    is_admin : {type : Boolean, default : false},
    token : String,
})

const User = mongoose.model('users', userSchema)

module.exports = User