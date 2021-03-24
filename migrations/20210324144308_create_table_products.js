
exports.up = function (knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description')
          table.integer('manufacturerId').references('id')
            .inTable('manufacturers').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('products')
};