import * as fs from 'fs';

const dirPath = 'data';
export const fileNameTarget = `${dirPath}/contacts.json`;

export function checkExistsDir() {
  if (!fs.existsSync(dirPath)) {
    makeDirectory();
  }

  if (!fs.existsSync(fileNameTarget)) {
    makeFile();
  }
}

export function makeDirectory() {
  return fs.mkdirSync(dirPath);
}

export function makeFile() {
  return fs.writeFileSync(fileNameTarget, '[]', 'utf-8');
}
