const db = require('../../data/dbConfig');

module.exports = {
  create: function(user) {
    return db('users')
      .insert(user)
      .then(([ id ]) => this.readById(id));
  },

  read: function() {
    return db('users')
      .select('id', 'username', 'department');
  },

  readById: function(id) {
    return db('users')
      .select('id', 'username', 'department')
      .where({ id })
      .first();
  },

  readByUsername: function(username) {
    return db('users')
      .where({ username })
      .first();
  }
};
