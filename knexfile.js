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