const readline = require('readline');
const validator = require('validator');
const fs = require('fs');

const dirPath = 'data';
const fileNameTarget = `${dirPath}/contacts.json`;

function makeDirectory() {
  return fs.mkdirSync(dirPath);
}

function makeFile() {
  return fs.writeFileSync(fileNameTarget, '[]', 'utf-8');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidInput = (type, input) => {
  switch (type) {
    case 'name':
      return true;
    case 'phone':
      return validator.isMobilePhone(input, 'id-ID');
    case 'email':
      return validator.isEmail(input);
    default:
      return false;
  }
};

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

const saveData = (data) => {
  const file = fs.readFileSync(fileNameTarget, 'utf-8');

  const convertContact = JSON.parse(file);

  convertContact.push(data);

  fs.writeFileSync(fileNameTarget, JSON.stringify(convertContact));

  console.log('Data berhasil ditambahkan...');
};

const main = async () => {
  try {
    if (!fs.existsSync(dirPath)) {
      makeDirectory();
    }

    if (!fs.existsSync(fileNameTarget)) {
      makeFile();
    }

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

    console.log(' ');
    console.log('-----------------------------');
    console.log('Your name : ', name);
    console.log('Your phone : ', phone);
    console.log('Your email : ', email);
    console.log('-----------------------------');

    const data = { name, phone, email };

    saveData(data);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
};

main();
