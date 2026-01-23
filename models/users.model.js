const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email : { type: String, unique: true },
    password : String,
    is_admin : {type : Boolean, default : false},
    token : String,
}, { timestamps: true })

const User = mongoose.model('users', userSchema)

module.exports = User