const {
  USER_DB,
  DB_NAME,
  HOST_DB,
  PASSWORD_DB,
  PORT_DB,
} = require('../lib/configEnv');

const Pool = require('pg').Pool;

const pool = new Pool({
  database: DB_NAME,
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  port: PORT_DB,
});
module.exports = pool;
