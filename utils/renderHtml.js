const fs = require('fs');

const renderHtml = (path, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.write(data);
    res.end();
  });
};

module.exports = {
  renderHtml,
};
