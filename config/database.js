/*
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

  if (env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL)
    return {
      defaultConnection: 'default',
      connections: {

      }
    }
  }

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
};
*/



module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("PHP_DB_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 8889),
        database: env("PHP_DB_DATABASE", "this-is-random"),
        username: env("PHP_DB_PASSWORD", "root"),
        password: env("PHP_DB_USERNAME", "root"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});