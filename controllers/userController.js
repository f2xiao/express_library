const jwt = require('jsonwebtoken');

exports.getUser = function (req, res, next) {
    const { username, password } = req.body;
    if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ username, password }, process.env.JWT_TOKEN_KEY, { expiresIn: '2h'}); 
        res.status(200).json({
            status: 'success',
            token,
            data: {
              username,password
            }
          });
        
    } else {
       return next(new Error('Something is wrong, please try again'))
    }
}

