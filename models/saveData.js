const fs = require('node:fs');
const { fileNameTarget } = require('../utils/createDir.js');

const saveData = (data) => {
  const file = fs.readFileSync(fileNameTarget, 'utf-8');

  const convertContact = JSON.parse(file);

  convertContact.push(data);

  fs.writeFileSync(fileNameTarget, JSON.stringify(convertContact));

  console.log('Data berhasil ditambahkan...');
};

module.exports = { saveData };
