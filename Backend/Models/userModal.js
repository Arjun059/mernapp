const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    avtar: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    isAdmin: {type: Boolean, default: false},
})
module.exports = mongoose.model("User", userSchema)