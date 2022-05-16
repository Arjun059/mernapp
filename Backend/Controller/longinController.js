const bcrypt = require("bcrypt")
const User = require("../Models/userModal")

// Longin Controllers
// handle get request  
exports.LoginControllerGet = async (req, res) => {
    res.send("Welcome to login Page.") 
}
// handle post request
exports.LoginControllerPost = async (req, res) => {
    const {email, password} = req.body;
    // check email and password is not empty
    const errorMsg = [];
    if (! email) errorMsg.push("Email Field is Required")
    if (! password) errorMsg.push("Password Field is Required")
    if (errorMsg.length) {
        return res.status(400).send(errorMsg)
    }else {
        errorMsg.length = 0;
    }
    // check user (email) is exits on database
    const user = await User.findOne({email: email})
    if (user) {
        // if user exits check password 
        let checkpass = bcrypt.compareSync(password, user.password)
        if (checkpass) {
            req.session.isAuth = true;
            req.session.user = user;
            return res.status(400).send("User Data Matched. User Logedin Successfully")
        }else {
            return res.status(400).send("Email and Password is not matched")
        }
    }else {
        return res.status(400).send("User Not Found")
    }

}
// handle logout 
exports.logoutGet = async (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            return res.status(400).send("Somthing Went Wrong")
        }else {
            res.status(200).send("Logout Successfully")
        }
    })
}