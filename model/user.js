const mongoose= require ("mongoose")

const userData = new mongoose.Schema({
    Name:{
        type: String
    },
    Email:{
        type: String
    },
    PhoneNumber:{
        type: Number
    },
    City:{
        type: String
    }
})

const User = mongoose.model("User", userData)

module.exports= User
