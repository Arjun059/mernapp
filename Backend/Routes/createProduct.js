const router = require("express").Router();
const Product = require("../Models/productModal")
const path = require("path")
const multer = require("multer");
const fs = require('fs')

// multer upload files  
const uploadHanle = require("../Utils/multer")

router.post("/img", uploadHanle, (req, res) => {
    res.send("done uploaded")
  
})

router.post("/new", async (req, res) => {
    const product = req.body;
    console.log(req.fileName, "multer filename")
    console.log(req.error, "multer error")
    try{
    let imageUrlPath = path.resolve(__dirname, "uploads", req.fileName)
    let createProudct = await new Product({
        name: product.name,
        imageUrl: imageUrlPath,
        shortDescription: product.shortDescription,
        salePrice: parseInt(product.salePrice),
        regularPrice: parseInt(product.regularPrice),
        author: product.author,
        publisher: product.publisher,
        binding: product.binding,
    })
    await createProudct.save();
    console.log(createProudct)
    res.status(201)
    res.send("product created successfuly")
    } catch(err) {
        res.status(400)
        res.send(err)
    }
})
router.patch("/update", async (req, res) => {
    try{
    let product = req.body;
    console.log(product)
    let updateProduct = await Product.updateOne({_id:product._id},product)
    console.log(updateProduct)
    res.status(200)
    res.send("updated success")
    }catch(err) {
    res.status(400)
    res.send('something went wrong')
    }
})

router.delete("/delete", async (req, res) => {
    let id = req.body._id;
    console.log(id)
    try{
    await Product.deleteOne({_id: id}) 
    res.status(200).send("product deleted")       
    }catch(err) {
    res.send("oops somthing went wrong product not deleted")
    }
})
module.exports = router;