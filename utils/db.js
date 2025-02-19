const Pool = require('pg').Pool;

const pool = new Pool({
  database: 'postgres',
  host: 'localhost',
  user: 'postgres',
  password: 'gelas',
  port: 5432,
});
module.exports = pool;
