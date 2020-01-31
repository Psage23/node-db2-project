
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {'carId':1, 'VIN': 'JNKCA31A61T027494', 'make': 'Infiniti', 'model': 'I30', 'mileage': 2500, 'engine type': '3.0L V6 DOHC 24V', 'status': 'clean'},
        {'carId':2, 'VIN': '4F2YU09161KM33122', 'make': 'Mazda', 'model': 'Tribute', 'mileage': 500, 'engine type': '3.0L V6 DOHC 24V', 'status': 'clean'},
        {'carId':3, 'VIN': '4T4BF1FKXER340134', 'make': 'Toyota', 'model': 'Camry', 'mileage': 6000, 'engine type': '205L L4 DOHC 16V', 'status': 'salvage'}
      ]);
    });
};
