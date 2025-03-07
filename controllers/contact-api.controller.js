const { validationResult } = require('express-validator');
const { getDataContactApi, addData } = require('../model/contact-api.model');

const getContactsList = async (req, res, next) => {
  try {
    const data = await getDataContactApi();

    res.status(200).json({
      message: 'Success',
      data,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};

const addNewContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { name, mobile, email } = req.body;

    if (!errors.isEmpty()) {
      const error = new Error('Error validation');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }

    const contact = {
      name,
      mobile,
      email,
    };
    await addData(contact);

    res.status(201).json({
      message: 'Success',
      statusCode: 201,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactsList,
  addNewContact,
};
