const db = require('../../data/dbConfig');

module.exports = {
  create: function(user) {
    return db('users')
      .insert(user)
      .then(([ id ]) => this.readById(id));
  },

  read: function() {
    return db('users')
    .select('id', 'first_name', 'last_name', 'username');
  },
};
