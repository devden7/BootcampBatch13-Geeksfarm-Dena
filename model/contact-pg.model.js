const pool = require('../utils/db');

const getData = async () => {
  const query = await pool.query(`SELECT * FROM contacts`);

  return query.rows;
};

const getDetailData = async (name) => {
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

const deleteData = async (name) => {
  await pool.query(`DELETE FROM contacts WHERE name = '${name}'`);
};

const updateData = async (contact) => {
  await pool.query(`UPDATE contacts
SET name = '${contact.newName}',
    mobile = '${contact.newMobile}',
    email = '${contact.newEmail}'
WHERE name = '${contact.name}'`);
};

module.exports = {
  getData,
  getDetailData,
  addData,
  deleteData,
  updateData,
};
