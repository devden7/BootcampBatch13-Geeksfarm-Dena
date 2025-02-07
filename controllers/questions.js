const { rl } = require('../utils/createReadLine.js');
const { isValidInput } = require('../utils/validator.js');

const questions = (theQuestion, type, errorMessage) => {
  return new Promise((resolve, reject) => {
    rl.question(theQuestion, (input) => {
      if (isValidInput(type, input)) {
        resolve(input);
      } else {
        console.log(errorMessage);
        resolve(questions(theQuestion, type, errorMessage));
      }
    });
  });
};

module.exports = { questions, rl };
