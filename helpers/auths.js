const jwt = require('jsonwebtoken');
const secret = require('../config/secret').jwtSecret;

module.exports = {
  authorize: function(req, res, next) {
    const { authorization } = req.headers;
    const payload = authorization? jwt.verify(authorization, secret) : null;
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