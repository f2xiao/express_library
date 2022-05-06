exports.verifyUser = function (req, res, next) {
    const { username, password } = req.body;
    if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
      req.session.isLoggedIn = true;
      res.redirect('/')
    } else {
      req.session.triedToLoggedIn = true;
      req.session.failedToLoggedIn = true; 
      res.redirect("/")
    }
}

exports.logoutUser = function (req, res, next) {
  req.session.isLoggedIn = false;
  res.redirect('/')
}