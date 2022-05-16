const User = require("../Models/userModal")

const isAdmin = async (req, res, next) => {
    let user = await User.findOne({_id: req.session.user._id})
    // check if user is admin
    if (user.isAdmin == true) {
        next()
    }else {
        return res.status(400).send("Credentials Envalid")
    }
}
module.exports = isAdmin