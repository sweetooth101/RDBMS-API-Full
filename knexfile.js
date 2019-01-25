// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.sqlite3'
    },
    userNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },
};
