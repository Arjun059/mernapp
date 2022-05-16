const router = require("express").Router()
const User = require("../Models/userModal")

// import controller
const { getAllUsers, deleteUsers, updateUsers, createUser } = require("../Controller/adminController")
// get all user data 
router.get("/users", getAllUsers)
// delete user
router.get("/users/delete/:id", deleteUsers)
// update user
router.post("/users/update/:id", updateUsers)
// create new user 
router.post("/users/create", createUser)

module.exports = router