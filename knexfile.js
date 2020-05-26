// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data2/theexpat1 .db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data2/migrations',
    },
    seeds: {
      directory: './data2/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data2/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data2/migrations',
    },
    seeds: {
      directory: './data2/seeds',
    },
  },
};