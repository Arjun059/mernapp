const bcrypt = require("bcrypt")
const User = require("../Models/userModal")


// Register Routes Handler
exports.RegisterControllerGet = async (req, res) => {
    // show register page
    res.send("Welcome to Register Page")
}
exports.RegisterControllerPost = async (req, res) => {
    // get the data
    let {email, firstname, lastname, password, cnfpassword} = req.body;
    let avtarPath = req.fileName;
    console.log(req.fileName, "this is req.fileName ")
    // check if any field is empty
    let errorMsg = [];
    if (! firstname) errorMsg.push("First Name is Required")
    if (! lastname) errorMsg.push("Last Name is Required")
    if (! email) errorMsg.push("Email is Required")
    if (! password) errorMsg.push("Password is Required")
    if (! cnfpassword) errorMsg.push("Confirm Password is Required")
    // send response if any filed is empty
    if (errorMsg.length) {
        res.status(400)
        // res.status(200)
        return res.send(errorMsg)
    }else {
        errorMsg.length = 0;
    }
    // validation rules
    // first name should only have alphabet and should be 3 character long  
    if (firstname.length < 3) errorMsg.push("First Name should be 3 character long")
    if (! isNaN(firstname)) errorMsg.push("First Name should have only alphabet")
    
    // last name should only have alphabet and should be 3 character long  
    if (lastname.length < 3) errorMsg.push("Last Name should be 3 character long")
    if (! isNaN(firstname)) errorMsg.push("Last Name should have only alphabet")

    // password should be 6 character long
    if (password.length < 6) errorMsg.push("Password should be 6 character long")
    if (cnfpassword != password) errorMsg.push("Password and confirm is not matched")
    
    // email should be a email 
    if (ValidateEmail(email) == false) errorMsg.push("Email should be an email address")
    
    if (errorMsg.length) {
        // res.status(200)
        res.status(400)
        return res.send(errorMsg)
    }else {
        errorMsg.length = 0;
    }
    // hasing password
    const hashpass = await bcrypt.hash(password, 10) 
    if (hashpass == null) errorMsg.push("SomeThing Went Wrong Try Again Later") 
    if (errorMsg.length) return res.status(400).send(errorMsg)
    // Creating New User
    const newUser = await new User({
        avtar: avtarPath,
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: hashpass,
    })
    // save user in db 
    newUser.save()
    console.log(newUser)
    res.status(200)
    res.send("User Register Successfuly")
}
// email validater
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}