const fs = require('node:fs');
const { fileNameTarget } = require('../utils/createDir.js');

const saveData = (data, type) => {
  const initiate = findData();

  if (type === 'update' || type === 'delete') {
    return fs.writeFileSync(fileNameTarget, JSON.stringify(data));
  }
  initiate.push(data);

  fs.writeFileSync(fileNameTarget, JSON.stringify(initiate));

  console.log('Berhasil...');
};

const findData = () => {
  const file = fs.readFileSync(fileNameTarget, 'utf-8');

  const convertContact = JSON.parse(file);
  return convertContact;
};

const findContactList = () => {
  const data = findData();

  if (data.length < 1) return console.log('Contact tidak ditemukan');

  console.log('----------List Contact tersedia----------');
  for (let i = 0; i < data.length; i++) {
    console.log(
      `${i + 1}. Name: ${data[i].name}, Phone: ${data[i].phone}, email: ${
        data[i].email
      } `
    );
  }
};

const findContactDetail = (name) => {
  const data = findData();
  const findDetailData = data.find((value) => value.name === name);
  if (!findDetailData) return console.log('Contact tidak ditemukan');

  console.log(
    `Name: ${findDetailData.name}, Phone: ${findDetailData.phone}, email: ${findDetailData.email} `
  );
};

const deleteContact = (name) => {
  const data = findData();
  const findContactData = data.find((value) => value.name === name);
  if (!findContactData) return console.log('Contact tidak ditemukan');

  const findDetailData = data.filter((value) => value.name !== name);
  saveData(findDetailData, 'delete');

  console.log('--------------------');
  console.log(
    `Name: ${findContactData.name}, Phone: ${findContactData.phone}, email: ${findContactData.email} Berhasil dihapus... `
  );
  console.log(' ');

  for (let i = 0; i < findDetailData.length; i++) {
    console.log(
      `${i + 1}. Name: ${findDetailData[i].name}, Phone: ${
        findDetailData[i].phone
      }, email: ${findDetailData[i].email} `
    );
  }
  console.log('--------------------');
};

const updateContact = (contact) => {
  const data = findData();
  const findDetailData = data.find((value) => value.name === contact.name);
  const findDetailDataIndex = data.findIndex(
    (value) => value.name === contact.name
  );
  const newContactData = {
    name: contact.newName !== undefined ? contact.newName : findDetailData.name,
    phone:
      contact.newPhone !== undefined ? contact.newPhone : findDetailData.phone,
    email:
      contact.newEmail !== undefined ? contact.newEmail : findDetailData.email,
  };

  if (findDetailData) {
    data[findDetailDataIndex] = newContactData;
  }

  saveData(data, 'update');
};

module.exports = {
  saveData,
  findContactList,
  findContactDetail,
  deleteContact,
  updateContact,
};
