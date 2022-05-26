const router = require("express").Router()
const Product = require("../Models/productModal")

// get single product product
router.get("/single/:id", async (req, res) => {
try {
    let id = req.params.id
    let product = await Product.find({_id: id})
    if (product.length !== 0) { 
         res.send(product)
    } else { 
         res.send("Product not found") 
    }
}catch(err) {
    res.status(400)
    res.send('something went wrong')
}
})
// get all product 
router.get("/all", async (req, res) => {
try{
    let products = await Product.find({});
    res.send(products)

}catch(err) {
    res.status(400)
    res.send(err)
}
})

module.exports = router;