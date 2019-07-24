
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'james',
          department: 'Software Engineering',
          password: '$2a$12$8l4q6chsVFh1f2GFP99HUeaGmdXTgsfSWEJbHfqa/EtttIrKR8d8y'
        },
        {
          username: 'Ben',
          department: 'Software Engineering',
          password: '$2a$12$8l4q6chsVFh1f2GFP99HUeaGmdXTgsfSWEJbHfqa/EtttIrKR8d8y'
        },
        {
          username: 'jose',
          department: 'Software Engineering',
          password: '$2a$12$8l4q6chsVFh1f2GFP99HUeaGmdXTgsfSWEJbHfqa/EtttIrKR8d8y'
        },
        {
          username: 'jackie',
          department: 'People',
          password: '$2a$12$8l4q6chsVFh1f2GFP99HUeaGmdXTgsfSWEJbHfqa/EtttIrKR8d8y'
        },
        {
          username: 'Chibaby',
          department: 'People',
          password: '$2a$12$8l4q6chsVFh1f2GFP99HUeaGmdXTgsfSWEJbHfqa/EtttIrKR8d8y'
        },
      ]);
    });
};
