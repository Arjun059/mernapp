const logedinCheck = async (req, res, next) => {
    if (req.session.user) {
        return res.status(400).send("User Already Loged In")
    }else {
        next();
    }

}
module.exports = logedinCheck