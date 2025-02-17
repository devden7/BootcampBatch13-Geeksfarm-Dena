const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const {
  findContactList,
  findContactDetail,
  createContact,
  deleteContact,
  updateContact,
} = require('./controllers/contact.controller');
const { isValidInput } = require('./utils/validator');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

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

app.get('/add-contact', (req, res) => {
  res.render('contactForm', { title: 'Add Contact', type: 'add' });
});

app.post('/create-contact', (req, res) => {
  const { name, phone, email } = req.body;
  const errors = [];
  //validation
  // if (!isValidInput('name', name)) {
  //   errors.push('Name already exist');
  // }
  // if (isValidInput('phone', phone)) {
  //   errors.push('Phone number is not valid');
  // }
  // if (isValidInput('email', email)) {
  //   errors.push('Email is not valid!');
  // }
  if (errors.length > 0) {
    return;
  } else {
    const contact = {
      name,
      phone,
      email,
    };
    createContact(contact);
    res.redirect('/contact');
  }
});

app.post('/delete', (req, res) => {
  const nameId = req.body.name;
  deleteContact(nameId);
  res.redirect('/contact');
});

app.get('/edit-contact/:name', (req, res) => {
  const paramsId = req.params.name;
  const data = findContactDetail(paramsId);
  if (!data) return res.redirect('/notFound');
  res.render('contactForm', {
    contact: data,
    title: 'edit Contact',
    type: 'edit',
  });
});

app.post('/update-contact/', (req, res) => {
  const { oldName, name, phone, email } = req.body;
  const contact = {
    name: oldName,
    newName: name,
    newPhone: phone,
    newEmail: email,
  };
  updateContact(contact);
  res.redirect('/contact');
});
app.use('/', (req, res) => {
  res.status(404);
  res.send('404 Page not found');
});
app.listen(3000, () => {
  console.log('running express in localhost:3000');
});
