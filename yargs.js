const yargs = require('yargs');
const { saveData } = require('./models/saveData.js');
const { checkExistsDir } = require('./utils/createDir.js');

const main = () => {
  checkExistsDir();

  yargs.command({
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
      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email,
      };

      saveData(contact);
    },
  });

  yargs.parse();
};

main();
