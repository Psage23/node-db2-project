const knex = require('knex');
const config = require('../knexfile');

const cars = knex(config.development);

module.exports = cars;