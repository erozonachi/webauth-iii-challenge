const usersModel = require('./users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../config/secret').jwtSecret;

module.exports = {
  create: async function(req, res, next) {
    try {
      const user = await usersModel.create({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 12)
      });

      res.status(201)
        .json(user);
    } catch(error) {
      next(error);
    }
  },

  read: async function(req, res, next) {
    try {
      const users = await usersModel.read(req.user.department);

      res.status(200)
        .json(users);
    } catch(error) {
      next(error);
    }
  },

  authenticate: async function(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await usersModel.readByUsername(username);
      if(user && bcrypt.compareSync(password, user.password)) {
        const payload = {
          sub: user.id,
          username: user.username,
          department: user.department
        };
        const token = jwt.sign(payload, secret, { expiresIn: '1d' });

        return res.status(200)
          .json({
            message: `Welcome ${user.username}`,
            token
          });
      }

      res.status(400)
        .json({
          message: 'invalid credentials'
        });
    } catch(error) {
      next(error);
    }
  }
};
