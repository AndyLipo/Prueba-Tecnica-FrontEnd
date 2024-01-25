module.exports = {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true, // Agrega esta línea para evitar la advertencia
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  };