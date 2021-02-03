const { Pool } = require('pg')

const pool = new Pool({
  user: 'lrwsnlqx',
  host: 'postgres://lrwsnlqx:9hBHTf2t0fDqgUpk2WP2De31DqXZTZq3@ziggy.db.elephantsql.com:5432/lrwsnlqx',
  database: 'lrwsnlqx',
  password: '9hBHTf2t0fDqgUpk2WP2De31DqXZTZq3',
  port: 5432,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}