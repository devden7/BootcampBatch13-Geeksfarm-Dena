const pool = require('../utils/db');

const getDataContactApi = async () => {
  const query = await pool.query(`SELECT * FROM contacts`);

  return query.rows;
};

const getContactDetailApi = async (name) => {
  const query = await pool.query(
    `SELECT * FROM contacts WHERE name = '${name}'`
  );

  return query.rows[0];
};

const addData = async (contact) => {
  await pool.query(
    `INSERT INTO contacts values ('${contact.name}', '${contact.mobile}', '${contact.email}') RETURNING *`
  );
};

const deleteContactApi = async (name) => {
  await pool.query(`DELETE FROM contacts WHERE name = '${name}'`);
};

const updateContactApi = async (contact) => {
  await pool.query(`UPDATE contacts
SET name = '${contact.name}',
    mobile = '${contact.mobile}',
    email = '${contact.email}'
WHERE name = '${contact.oldName}'`);
};

module.exports = {
  getDataContactApi,
  getContactDetailApi,
  addData,
  deleteContactApi,
  updateContactApi,
};
