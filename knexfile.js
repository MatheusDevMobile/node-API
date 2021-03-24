// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'reactDb',
      user:     'postgres',
      password: '230523'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
