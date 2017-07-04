import knex from 'knex'

export default callback => {
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './photos.db'
    },
    useNullAsDefault: true,
    debug: true
  });
  try {
    callback(db);
  } catch (e) {
    console.log('main error', e);
  }
}
