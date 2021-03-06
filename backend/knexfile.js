// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */
module.exports = {

  development: {
      client: 'postgresql',
      connection: {
        database: 'DbforMonopoly',
        user: 'acid',
        password:'bkmz099',
        host:'localhost',
        port:5432,
      },
      migrations:{
        directory:'migrations',
      },
      seeds:{
        directory: __dirname+'/db/seeds',
      }
  },

  staging: {
    client: 'postgresql',
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
    client: 'postgresql',
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
  }

};
