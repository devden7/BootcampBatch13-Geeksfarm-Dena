const pool = require('../utils/db');

const getDataContactApi = async () => {
  try {
    const query = await pool.query(`SELECT * FROM contacts`);

    return query.rows;
  } catch (error) {
    throw error;
  }
};

const addData = async (contact) => {
  await pool.query(
    `INSERT INTO contacts values ('${contact.name}', '${contact.mobile}', '${contact.email}') RETURNING *`
  );
};

module.exports = {
  getDataContactApi,
  addData,
};
