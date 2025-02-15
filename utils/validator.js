const validator = require('validator');
const { findData } = require('../model/contact-fs.model');

const { isMobilePhone, isEmail } = validator;

const isValidInput = (type, input, mode) => {
  switch (type) {
    case 'name':
      const data = findData();
      if (mode === 'edit' && input === undefined) return true;
      const findDataInput = data.find(
        (value) => value.name.toLowerCase() === input.toLowerCase()
      );

      if (findDataInput) return false;

      if (!findDataInput) return true;
    case 'phone':
      if (mode === 'edit' && input === undefined) return true;
      return isMobilePhone(input, 'id-ID');
    case 'email':
      if (input === undefined) return true;
      return isEmail(input);
    default:
      return false;
  }
};

module.exports = { isValidInput };
