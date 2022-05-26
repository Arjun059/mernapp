const multer = require("multer");
const path = require('path')

// use storage engine, define file path and name 
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let filepath = path.join(__dirname, "uploads")
        cb(null, "uploads")
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        fname = file.fieldname +"-"+ Date.now() + ext 
        req.fileName = fname;
        cb(null, fname)
    }
})
// init multer 
var upload =  multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        console.log(ext)
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.gif' && ext !== '.jiff') {
            // cb(new Error("Only Images Are Allowed"))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}).single("avtar")

// hanle multer error if have 
const uploadHanle = function(req, res, next){
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            req.error = err.message
            next()
        }else{ next() }
    })
} 

module.exports = uploadHanle;



