import * as fs from 'fs';
import { fileNameTarget } from '../utils/createDir.js';

export const saveData = (data) => {
  const file = fs.readFileSync(fileNameTarget, 'utf-8');

  const convertContact = JSON.parse(file);

  convertContact.push(data);

  fs.writeFileSync(fileNameTarget, JSON.stringify(convertContact));

  console.log('Data berhasil ditambahkan...');
};
