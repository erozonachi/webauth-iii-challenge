const knex = require('knex');
const devOptions = require('../knexfile').development;

module.exports = knex(devOptions);
