const { saveData } = require('./model/contact-fs.model.js');
const { checkExistsDir } = require('./utils/createDir.js');
const { rl } = require('./utils/createReadLine.js');
const { isValidInput } = require('./utils/validator.js');

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

const main = async () => {
  try {
    checkExistsDir();

    const name = await questions('What is your name? ', 'name');
    const phone = await questions(
      'What is your phone number? ',
      'phone',
      'invalid phoneNumber...'
    );
    const email = await questions(
      'What is your email? ',
      'email',
      'invalid Email...'
    );

    const data = { name, phone, email };
    saveData(data);
    console.log('Success add a contact');
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
};

main();
