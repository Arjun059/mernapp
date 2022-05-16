const mongoose = require("mongoose")
const connectDB = function(DB_URI) {
    mongoose.connect(DB_URI)
    .then(() => console.log("db connected"))
    .catch((error) => {
        console.log("! db is not connected")
        console.log(DB_URI)
    })
}
module.exports = connectDB