// const Pool = require('pg').Pool;
const { Pool } = require('pg')
const connectionString = 'postgres://lrwsnlqx:9hBHTf2t0fDqgUpk2WP2De31DqXZTZq3@ziggy.db.elephantsql.com:5432/lrwsnlqx'

const pool = new Pool({
  connectionString,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}