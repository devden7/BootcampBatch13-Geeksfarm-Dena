const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const { validationResult, body } = require('express-validator');
const {
  findContactList,
  findContactDetail,
  createContact,
  deleteContact,
  updateContact,
  findData,
} = require('./controllers/contact.controller');

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
  const data = { name: '', phone: '', email: '' };
  res.render('contactForm', {
    contact: data,
    title: 'Add Contact',
    type: 'add',
    errors: {},
  });
});

app.post(
  '/create-contact',
  body('name').custom((value) => {
    const data = findData();
    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('phone').isMobilePhone('id-ID').withMessage('Phone number is not valid'),
  body('email').isEmail().withMessage('Email is not valid!'),
  (req, res) => {
    const errors = validationResult(req);
    const { name, phone, email } = req.body;
    const data = { name, phone, email };
    if (!errors.isEmpty()) {
      return res.render('contactForm', {
        contact: data,
        title: 'Add Contact',
        type: 'add',
        errors: errors.mapped(),
      });
    }
    const contact = {
      name,
      phone,
      email,
    };
    createContact(contact);
    res.redirect('/contact');
  }
);

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
    errors: {},
  });
});

app.post(
  '/update-contact',
  body('name').custom((value, { req }) => {
    if (value.toLowerCase() === req.body.oldName.toLowerCase()) {
      return true;
    }
    const data = findData();
    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );

    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('phone').isMobilePhone('id-ID').withMessage('Phone number is not valid'),
  body('email').isEmail().withMessage('Email is not valid!'),
  (req, res) => {
    const { oldName, name, phone, email } = req.body;
    const errors = validationResult(req);
    const data = findContactDetail(oldName);
    const errorObj = errors.mapped();

    if (!errors.isEmpty()) {
      return res.render('contactForm', {
        contact: { ...data, name, oldName, phone, email },
        title: 'edit Contact',
        type: 'edit',
        errors: errorObj,
      });
    }

    const contact = {
      name: oldName,
      newName: name,
      newPhone: phone,
      newEmail: email,
    };

    updateContact(contact);
    res.redirect('/contact');
  }
);
app.use('/', (req, res) => {
  res.status(404);
  res.send('404 Page not found');
});
app.listen(3000, () => {
  console.log('running express in localhost:3000');
});
