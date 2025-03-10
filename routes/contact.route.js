const express = require('express');
const {
  getContactsList,
  addNewContact,
  getContactDetail,
  deleteContact,
  updateContact,
} = require('../controllers/contact-api.controller.js');
const { body } = require('express-validator');
const { getDataContactApi } = require('../model/contact-api.model.js');

const router = express.Router();

router.get('/contacts', getContactsList);
router.get('/contact/:name', getContactDetail);
router.post(
  '/create-contact',
  body('name').custom(async (value) => {
    const data = await getDataContactApi();

    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );

    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('mobile')
    .isMobilePhone('id-ID')
    .withMessage('Phone number is not valid'),
  body('email')
    .isEmail()
    .optional({ checkFalsy: true })
    .withMessage('Email is not valid!'),
  addNewContact
);
router.delete('/delete/:name', deleteContact);
router.put(
  '/update-contact/:name',
  body('name').custom(async (value, { req }) => {
    const paramsId = req.params.name;
    if (value.toLowerCase() === paramsId.toLowerCase()) {
      return true;
    }
    const data = await getDataContactApi();
    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );

    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('mobile')
    .isMobilePhone('id-ID')
    .withMessage('Phone number is not valid'),
  body('email')
    .isEmail()
    .optional({ checkFalsy: true })
    .withMessage('Email is not valid!'),
  updateContact
);

module.exports = router;
