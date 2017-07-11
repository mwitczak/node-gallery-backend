
exports.up = function(knex) {
  return knex.schema.createTable('Photos', table => {
    table.increments('id');
    table.string('url');
    table.integer('gallery_id')
    table.foreign('gallery_id').references('galleries.id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Photos');
};
