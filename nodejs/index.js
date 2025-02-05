const readline = require('readline');
const validator = require('validator');
const fs = require('fs');
const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');

const fileNameTarget = 'data/contacts.json';

async function makeDirectory() {
  const projectFolder = join(__dirname, 'data');
  const dirCreation = await mkdir(projectFolder, { recursive: true });
  return dirCreation;
}

function makeFile() {
  fs.writeFileSync(fileNameTarget, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (theQuestion, result, type, errorMessage) => {
  return new Promise((resolve, reject) => {
    rl.question(theQuestion, (input) => {
      if (type === 'name') {
        resolve(result + ' ' + input);
      } else if (
        type === 'phoneNumber' &&
        validator.isMobilePhone(input, 'id-ID')
      ) {
        resolve(result + ' ' + input);
      } else if (type === 'email' && validator.isEmail(input)) {
        resolve(result + ' ' + input);
      } else {
        console.log(errorMessage);
        const newAnswer = questions(
          theQuestion,
          result,
          type,
          errorMessage
        ).then((res) => res);
        resolve(newAnswer);
      }
    });
  });
};

const main = async () => {
  try {
    const name = await questions('What is your name? ', 'Your name : ', 'name');
    const phoneNumber = await questions(
      'What is your phone number? ',
      'Your number : ',
      'phoneNumber',
      'invalid phoneNumber'
    );
    const email = await questions(
      'What is your email? ',
      'Your email : ',
      'email',
      'invalid Email'
    );

    console.log(name);
    console.log(phoneNumber);
    console.log(email);

    const data = { name, phoneNumber, email };

    if (!fs.existsSync(fileNameTarget)) {
      makeDirectory().catch(console.error);
      makeFile();
    }

    const file = fs.readFileSync(fileNameTarget, 'utf-8');

    const convertContact = JSON.parse(file);

    convertContact.push(data);

    fs.writeFileSync(fileNameTarget, JSON.stringify(convertContact));
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
};

main();
