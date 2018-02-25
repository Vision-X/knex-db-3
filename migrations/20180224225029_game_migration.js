
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments('id').primary()
    table.text('name')
    table.text('developer')
    table.float('rating').unsigned
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};
