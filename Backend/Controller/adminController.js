const User = require("../Models/userModal")

exports.getAllUsers = async (req, res) => {
    const users = await User.find({}, {isAdmin: 0})
    res.status(200)
    res.send(users)
}
exports.deleteUsers = async (req, res) => {
    const user_id = req.params.id;
    const delUser = await User.findByIdAndDelete({_id: user_id})
    if (delUser) {
        res.status(200)
        return res.send("user delete")
    }else {
        res.status(400)
        res.send("somthing went wrong")
    }
}
exports.updateUsers = async (req, res) => {
    // get data
    const {firstname, lastname, age, email, password} = req.body;
    // retrive data from database
    const user_id = req.params.id;
    const updateUser = await User.findByIdAndUpdate({_id: user_id})
    if (firstname) updateUser.firstName = firstname;
    if (lastname)  updateUser.lastName = lastname;
    if (age)    updateUser.age = age;
    if (email)  updateUser.email = email;
    if (password)   updateUser.password = password;
    // save updated data
    updateUser.save();
    res.status(200)
    res.send("user updated")       
}
exports.createUser = async (req, res) => {
  const {firstname, lastname, age, email, password} = req.body;
  const newuser = new User.create({
      firstName: firstname,
      lastName: lastname,
      age: age,
      email: email,
      password: password
  })
  res.status(200)
  res.send("New user Created")
}