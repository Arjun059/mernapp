const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../Models/userModal")
const isAuth = require("../Middleware/authCeck")
const isLogedin = require("../Middleware/logedinCheck")
const uploadHanle = require("../Utils/multer")
// import controllers
const { RegisterControllerPost, RegisterControllerGet } = require("../Controller/registerController")
const { LoginControllerPost, LoginControllerGet, logoutGet } = require("../Controller/longinController")
// Register Routes
router.get("/register", isLogedin, RegisterControllerGet)
router.post("/register", isLogedin, uploadHanle, RegisterControllerPost)
// Login Routes 
router.get("/login", isLogedin, LoginControllerGet)
router.post("/login", isLogedin, LoginControllerPost)
// logout Routes 
router.get("/logout", isAuth, logoutGet)

module.exports = router;