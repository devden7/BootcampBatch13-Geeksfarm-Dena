const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const {
  findContactList,
  findContactDetail,
} = require('./controllers/contact.controller');

const app = express();

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
  const data = findContactList();
  res.render('contact', { title: 'Contact page', cont: data });
});

app.get('/contactDetail/:name', (req, res) => {
  const paramsId = req.params.name;
  const item = findContactDetail(paramsId);

  if (!item) {
    return res.redirect('/notFound');
  }
  res.render('contactDetail', {
    title: 'Contact Detail',
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
  console.log('running express in localhost:3000');
});
