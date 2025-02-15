const yargs = require('yargs');
const { isValidInput } = require('./utils/validator.js');
const {
  findContactList,
  findContactDetail,
  deleteContact,
  createContact,
  updateContact,
} = require('./controllers/contact.controller.js');
const { findData } = require('./model/contact-fs.model.js');

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
      const inputData = [
        {
          field: 'name',
          isValid: isValidInput('name', argv.name),
          errorMsg: 'Name already exist',
        },
        {
          field: 'phone',
          isValid: isValidInput('phone', argv.phone),
          errorMsg: ' Phone number is not valid ',
        },
        {
          field: 'email',
          isValid: isValidInput('email', argv.email),
          errorMsg: 'Email is not valid!',
        },
      ];

      const filterErr = inputData
        .filter((value) => !value.isValid)
        .map((data) => data.errorMsg);

      if (filterErr.length > 0) return console.log(filterErr.join(', '));

      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email || '',
      };
      createContact(contact);
    },
  })
  .command({
    command: 'list',
    describe: 'finding all contact',

    handler() {
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
      const data = findData();
      const findDetailData = data.find((value) => value.name === argv.name);
      if (!findDetailData) return console.log('Cannot find contact...');

      const inputData = [
        {
          field: 'name',
          isValid: isValidInput('name', argv.newName, 'edit'),
          errorMsg: 'Name already exist',
        },
        {
          field: 'phone',
          isValid: isValidInput('phone', argv.newPhone, 'edit'),
          errorMsg: ' Phone number is not valid ',
        },
        {
          field: 'email',
          isValid: isValidInput('email', argv.newEmail, 'edit'),
          errorMsg: 'Email is not valid!',
        },
      ];

      const filterErr = inputData
        .filter((value) => !value.isValid)
        .map((data) => data.errorMsg);

      if (filterErr.length > 0) return console.log(filterErr.join(', '));

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
