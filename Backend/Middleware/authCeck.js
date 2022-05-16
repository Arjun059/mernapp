let isAuth = function(req, res, next) {
    if (req.session.isAuth == true) {
        next()
    }else {
        return res.status(300).send("You Have To Login First")
    }
}
module.exports = isAuth;