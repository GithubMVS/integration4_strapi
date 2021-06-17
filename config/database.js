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
