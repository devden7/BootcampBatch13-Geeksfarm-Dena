import { saveData } from './models/saveData.js';
import { checkExistsDir } from './utils/createDir.js';
import { questions, rl } from './controllers/questions.js';

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
