module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './data/expat.db3'
 
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
  },
    useNullAsDefault: true, 
  },

  staging: {
    client: 'sqlite3',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './data/expat.db3'
 
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
  },
    useNullAsDefault: true, 
  }
};