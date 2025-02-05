const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (theQuestion, result) => {
  return new Promise((resolve, reject) => {
    rl.question(theQuestion, (input) => {
      resolve(result + ' ' + input);
    });
  });
};

const main = async () => {
  const name = await questions('What is your name? ', 'Your name : ');
  const phoneNumber = await questions(
    'What is your phone number? ',
    'Your number : '
  );
  const email = await questions('What is your email? ', 'Your email : ');

  console.log(name);
  console.log(phoneNumber);
  console.log(email);
  rl.close();
};

main();
