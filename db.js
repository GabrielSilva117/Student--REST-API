// DB env

const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: 137978,
  port: 5432
})

module.exports = pool