const fs = require('node:fs');

const dirPath = 'data';
const fileNameTarget = `${dirPath}/contacts.json`; // ini

function makeDirectory() {
  return fs.mkdirSync(dirPath);
}

function makeFile() {
  return fs.writeFileSync(fileNameTarget, '[]', 'utf-8');
}

//ini
function checkExistsDir() {
  if (!fs.existsSync(dirPath)) {
    makeDirectory();
  }

  if (!fs.existsSync(fileNameTarget)) {
    makeFile();
  }
}

module.exports = { fileNameTarget, checkExistsDir };
