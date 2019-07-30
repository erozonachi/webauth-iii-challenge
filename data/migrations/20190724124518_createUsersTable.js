
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('username')
      .notNullable()
      .unique();
    table.text('department')
      .notNullable();
    table.text('password')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
