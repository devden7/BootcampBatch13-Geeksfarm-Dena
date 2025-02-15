const fs = require('node:fs');
const { fileNameTarget } = require('../utils/createDir.js');

const saveData = (data, type) => {
  const initiate = findData();

  if (type === 'update' || type === 'delete') {
    return fs.writeFileSync(fileNameTarget, JSON.stringify(data));
  }
  initiate.push(data);

  fs.writeFileSync(fileNameTarget, JSON.stringify(initiate));
};

const findData = () => {
  const file = fs.readFileSync(fileNameTarget, 'utf-8');

  const convertContact = JSON.parse(file);
  return convertContact;
};

module.exports = { saveData, findData };
