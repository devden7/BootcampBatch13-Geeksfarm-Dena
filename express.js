const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const { findData } = require('./models/yargs.model');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home page',
  });
});

app.get('/contact', (req, res) => {
  const data = findData();

  res.render('contact', { title: 'Contact page', cont: data });
});

app.get('/contactDetail/:name', (req, res) => {
  const params = req.params;
  const data = findData();

  const item = data.find((value) => value.name === params.name);
  if (!item) {
    return res.redirect('/notFound');
  }
  console.log(item);
  res.render('contactDetail', {
    title: 'Contact Detail',
    name: params,
    data: item,
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About page',
  });
});

app.get('/product/:idProduct/', (req, res) => {
  res.send(
    `Product page with ID: ${req.params.idProduct} categoryID: ${req.query.category}`
  );
});
app.use('/', (req, res) => {
  res.status(404);
  res.send('404 Page not found');
});
app.listen(port, () => {
  console.log('running express in port 3000');
});
