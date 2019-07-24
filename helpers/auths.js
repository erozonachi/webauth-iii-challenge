const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

module.exports = {
  authorize: function(req, res, next) {
    const { authorization } = req.headers;
    const payload = jwt.verify(authorization, secret);
    if(payload && payload.sub) {
      req.user = payload;
      next();
    } else {
      res.status(401)
        .json({
          message: 'unauthorized access'
        });
    }
  }
}