const { saveData, findData } = require('../model/contact-fs.model.js');
const { checkExistsDir } = require('../utils/createDir.js');

//Create
const createContact = (data) => {
  checkExistsDir();
  saveData(data);
  console.log('Success add a contact...');
};

//GET
const findContactList = () => {
  checkExistsDir();
  const data = findData();
  if (data.length < 1) console.log('Cannot find contact...');
  // console.log(data);
  return data;
};

//GET DETAIL
const findContactDetail = (name) => {
  checkExistsDir();
  const data = findData();
  const findDetailData = data.find((value) => value.name === name);
  if (!findDetailData) return console.log('Cannot find contact...');
  // console.log(findDetailData);

  return findDetailData;
};

//DELETE
const deleteContact = (name) => {
  checkExistsDir();
  const data = findData();
  const findContactData = data.find((value) => value.name === name);
  if (!findContactData) return console.log('Cannot find contact...');

  const findDetailData = data.filter((value) => value.name !== name);
  saveData(findDetailData, 'delete');

  console.log('Contact removed...');
};

//UPDATE
const updateContact = (contact) => {
  checkExistsDir();
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
  console.log(`Contact information updated...`);
};

module.exports = {
  createContact,
  findContactList,
  findContactDetail,
  deleteContact,
  updateContact,
  findData,
};
