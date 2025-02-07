import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { saveData } from './models/saveData.js';
import { checkExistsDir } from './utils/createDir.js';

checkExistsDir();

yargs(hideBin(process.argv))
  .command(
    'add',
    'add new contact',
    {
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
    (argv) => {
      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email,
      };

      saveData(contact);
    }
  )
  .parse();
