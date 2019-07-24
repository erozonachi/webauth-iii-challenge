module.exports = {
  validateUser: function(req, res, next) {
    const { username, department, password } = req.body;

    if(!username || username.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required username field'
        });
    }
    if(!department || department.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required department field'
        });
    }
    if(!password || password.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required password field'
        });
    }

    next();
  }
}
