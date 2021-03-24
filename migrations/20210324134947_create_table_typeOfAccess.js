
exports.up = function(knex) {
    return knex.schema.createTable('access', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('access')
};