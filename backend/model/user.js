const mongoose = require("mongoose");

 const userSchema = new mongoose.Schema({

    firstname : {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    maxlength: [25, "Name must be 25 Ch Long"],
    },
    email :{
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },

 });

 module.exports = mongoose.model('user', userSchema);