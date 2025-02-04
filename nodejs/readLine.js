const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name;
let phoneNumber;
let email;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your name?: ', (nameInput) => {
      name = nameInput;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your phone number? : ', (phoneNumberInput) => {
      phoneNumber = phoneNumberInput;
      resolve();
    });
  });
};
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your email? : ', (emailInput) => {
      email = emailInput;
      resolve();
    });
  });
};

const main = async () => {
  await question1();
  await question2();
  await question3();
  //Here I'm calling the Function
  console.log('Your name : ' + name);
  console.log('Your number : ' + phoneNumber);
  console.log('Your email : ' + email);
  rl.close();
};

main();
