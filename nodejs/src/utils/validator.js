import validator from 'validator';

const { isMobilePhone, isEmail } = validator;

export const isValidInput = (type, input) => {
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
