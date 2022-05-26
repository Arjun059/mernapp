const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    imageUrl: {type: String, required:true},
    shortDescription: {type: String, required:true},
    salePrice: {type: Number},
    regularPrice: {type: Number},
    author: {type: String},
    publisher: {type: String},
    binding: {type: String},
    createdAt: {type: Date, default : new Date},
    updatedAt: {type: Array}
})

module.exports = mongoose.model("Product", productSchema);