
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('guid').notNull()
          table.integer('typeOfAccessId').references('id')
            .inTable('typeOfAccess').notNull()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };