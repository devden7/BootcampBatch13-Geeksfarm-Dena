const validator = require('validator');

const { isMobilePhone, isEmail } = validator;

const isValidInput = (type, input) => {
  switch (type) {
    case 'name':
      return true;
    case 'phone':
      return isMobilePhone(input, 'id-ID');
    case 'email':
      return isEmail(input);
    default:
      return false;
  }
};

module.exports = { isValidInput };
