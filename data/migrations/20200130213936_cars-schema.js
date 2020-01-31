
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('carId');
      tbl.decimal('VIN').notNullable();
      tbl.text('make', 128).notNullable();
      tbl.text('model', 128).notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('engine type', 128);
      tbl.text('status', 128);
  })
};

exports.down = function(knex) {
  return knex.shema.dropTableIfExists('cars')
};
