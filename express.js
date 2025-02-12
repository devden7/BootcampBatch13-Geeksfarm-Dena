const express = require('express');
const { renderHtml } = require('./utils/renderHtml');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  renderHtml('views/index.html', res);
});

app.get('/contact', (req, res) => {
  renderHtml('views/contact.html', res);
});

app.get('/about', (req, res) => {
  renderHtml('views/about.html', res);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('404 Page not found');
});
app.listen(port, () => {
  console.log('running express in port 3000');
});
