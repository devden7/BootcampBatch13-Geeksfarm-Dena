const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, { 'Content-type': 'text/html' });
    if (url === '/about') {
      fs.readFile('views/httpCoreModule/about.html', (err, data) => {
        if (err) {
          console.error(err);
          return;
        } else {
          res.write(data);
        }

        res.end();
      });
    } else if (url === '/contact') {
      fs.readFile('views/httpCoreModule/contact.html', (err, data) => {
        if (err) {
          console.error(err);
          return;
        } else {
          res.write(data);
        }

        res.end();
      });
    } else {
      fs.readFile('views/httpCoreModule/index.html', (err, data) => {
        if (err) {
          console.error(err);
          return;
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(3000, () => console.log('Server is running on port localhost:3000'));
