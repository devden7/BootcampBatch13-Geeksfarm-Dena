const yargs = require('yargs');
const {
  saveData,
  findContactList,
  findContactDetail,
  deleteContact,
  updateContact,
} = require('./models/yargs.model.js');
const { checkExistsDir } = require('./utils/createDir.js');

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
      name: {
        describe: 'contact name',
        demandOption: false,
        type: 'string',
      },
    },
    handler(argv) {
      checkExistsDir();

      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email,
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
    command: 'update [name] [new-name] [new-phone] [new-email]',
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
        alias: 'email',
      });
    },
    handler(argv) {
      checkExistsDir();
      console.log(argv);
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
