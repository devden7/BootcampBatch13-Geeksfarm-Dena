const fs = require('fs');

fs.readFileSync('Hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    err;
  }
  console.log(data);
});
