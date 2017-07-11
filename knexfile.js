// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './photos.db'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './photos.db'
    }
  }

};
