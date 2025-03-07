const dotenv = require('dotenv');
const { config } = dotenv;
config({ path: '.env.local' });
const {
  USER_DB,
  PASSWORD_DB,
  DB_NAME,
  HOST_DB,
  PORT_DB,
  ORIGIN_URL,
  PORT_LISTEN,
} = process.env;

module.exports = {
  USER_DB,
  PASSWORD_DB,
  DB_NAME,
  HOST_DB,
  PORT_DB,
  ORIGIN_URL,
  PORT_LISTEN,
};
