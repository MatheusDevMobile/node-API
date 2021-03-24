exports.up = function(knex) {
    return knex.schema.createTable('manufacturers', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('phone')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('manufacturers')
};