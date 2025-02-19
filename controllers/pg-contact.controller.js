const {
  getData,
  getDetailData,
  addData,
  deleteData,
  updateData,
} = require('../model/contact-pg.model');

const findContactListPG = async () => {
  const data = await getData();
  return data;
};

const findContactDetail = async (name) => {
  const data = await getDetailData(name);
  return data;
};

const createContact = async (contact) => {
  await addData(contact);
};

const deleteContact = async (name) => {
  await deleteData(name);
};

const updateContact = async (contact) => {
  await updateData(contact);
};

module.exports = {
  findContactListPG,
  findContactDetail,
  createContact,
  deleteContact,
  updateContact,
};
