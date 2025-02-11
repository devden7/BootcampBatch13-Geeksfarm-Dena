const yargs = require('yargs');
const {
  saveData,
  findContactList,
  findContactDetail,
  deleteContact,
  updateContact,
  findData,
} = require('./models/yargs.model.js');
const { checkExistsDir } = require('./utils/createDir.js');
const { isValidInput } = require('./utils/validator.js');

yargs
  .command({
    command: 'add',
    describe: 'add new contact',
    builder: {
      name: {
        describe: 'contact name',
        demandOption: true,
        type: 'string',
      },
      phone: {
        describe: 'contact phone',
        demandOption: true,
        type: 'string',
      },
      email: {
        describe: 'contact email',
        demandOption: false,
        type: 'string',
      },
    },
    handler(argv) {
      checkExistsDir();
      const isValidName = isValidInput('name', argv.name);
      const isValidPhone = isValidInput('phone', argv.phone);
      const isValidEmail = isValidInput('email', argv.email);
      if (!isValidName && !isValidPhone && isValidEmail)
        //DONE
        return console.log('Name already exist and Phone number is not valid!');
      if (!isValidName && isValidPhone && isValidEmail)
        //DONE
        return console.log('Name already exist!');
      if (!isValidPhone && isValidName && isValidEmail)
        //DONE
        return console.log('Phone number is not valid!');
      if (!isValidPhone && !isValidEmail && isValidName)
        //DONE
        return console.log(
          'Phone number is not valid! and Email is not valid!'
        );
      if (!isValidEmail && isValidName && isValidPhone)
        //DONE
        return console.log('Email is not valid!');
      if (!isValidEmail && !isValidName && isValidPhone)
        //DONE
        return console.log('Email is not valid and Name is already exist!');
      if (!isValidName && !isValidPhone && !isValidEmail)
        //DONE
        return console.log(
          'Name already exist, Phone number is not valid and Email is not valid!'
        );

      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email || '',
      };
      saveData(contact);
    },
  })
  .command({
    command: 'list',
    describe: 'finding all contact',

    handler(argv) {
      checkExistsDir();

      findContactList();
    },
  })
  .command({
    command: 'get <name>',
    describe: 'finding detail contact',
    builder: (yargs) => {
      yargs.positional('name', {
        describe: 'contact name',
        demandOption: true,
        type: 'string',
      });
    },
    handler(argv) {
      findContactDetail(argv.name);
    },
  })
  .command({
    command: 'remove <name>',
    describe: 'remove detail contact',
    builder: (yargs) => {
      yargs.positional('name', {
        describe: 'remove name',
        demandOption: true,
        type: 'string',
      });
    },
    handler(argv) {
      checkExistsDir();

      deleteContact(argv.name);
    },
  })
  .command({
    command: 'update <name> [new-name] [new-phone] [new-email]',
    describe: 'update detail contact',
    builder: (yargs) => {
      yargs.positional('name', {
        describe: 'update contact data',
        demandOption: true,
        type: 'string',
      });
    },
    builder: (yargs) => {
      yargs.positional('newName', {
        describe: 'update contact data',
        demandOption: false,
        type: 'string',
      });
      yargs.positional('newPhone', {
        describe: 'update contact data',
        demandOption: false,
        type: 'string',
      });
      yargs.positional('newEmail', {
        describe: 'update contact data',
        demandOption: false,
        type: 'string',
      });
    },
    handler(argv) {
      checkExistsDir();

      const data = findData();
      const findDetailData = data.find((value) => value.name === argv.name);
      if (!findDetailData) return console.log('Contact tidak ditemukan');

      const isValidName = isValidInput('name', argv.newName, 'edit');
      const isValidPhone = isValidInput('phone', argv.newPhone, 'edit');
      const isValidEmail = isValidInput('email', argv.newEmail, 'edit');
      if (!isValidName && !isValidPhone && isValidEmail)
        return console.log('Name already exist and Phone number is not valid!');
      if (!isValidName && isValidPhone && isValidEmail)
        return console.log('Name already exist!');
      if (!isValidPhone && isValidName && isValidEmail)
        return console.log('Phone number is not valid!');
      if (!isValidPhone && !isValidEmail && isValidName)
        return console.log(
          'Phone number is not valid! and Email is not valid!'
        );
      if (!isValidEmail && isValidName && isValidPhone)
        return console.log('Email is not valid!');
      if (!isValidEmail && !isValidName && isValidPhone)
        return console.log('Email is not valid and Name is already exist!');
      if (!isValidName && !isValidPhone && !isValidEmail)
        return console.log(
          'Name already exist, Phone number is not valid and Email is not valid!'
        );

      const contact = {
        name: argv.name,
        newName: argv.newName,
        newPhone: argv.newPhone,
        newEmail: argv.newEmail,
      };
      updateContact(contact);
    },
  })
  .parse();
