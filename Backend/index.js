const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const connectDB = require("./configDB")
const isAuth = require("./Middleware/authCeck")
const isAdmin = require("./Middleware/adminAuth")
const path = require("path")
const cors = require('cors')

// dotenv 
require("dotenv").config({})
// db connection
connectDB(process.env.DB_URI)
// express init
const app = express()
// body parser and stactic folder
app.use(cors())
app.use(express.json({limit: '6mb'}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


app.use(session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))
// import routes
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
const productRoutes = require("./Routes/productRoutes")
const createProduct = require("./Routes/createProduct")

// Routes 
app.use("/api/admin/", isAuth, isAdmin, adminRoutes)
app.use("/api/users/", userRoutes)
app.use("/api/product/", productRoutes)
app.use("/api/create-product/", createProduct)

// serve frontend 
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
})

// server listing at 
const PORT = process.env.PORT || 8080 
app.listen(PORT, () => console.log(`server running http://localhost:${PORT}`))