const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const { body, validationResult } = require('express-validator');

const app = express();

const {
  findContactListPG,
  findContactDetail,
  createContact,
  deleteContact,
  updateContact,
} = require('./controllers/pg-contact.controller');
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('pg/index', {
    title: 'Home page',
  });
});

app.get('/contact', async (req, res) => {
  const data = await findContactListPG();
  res.render('pg/contact', { title: 'Contact page', cont: data });
});

app.get('/contactDetail/:name', async (req, res) => {
  const paramsId = req.params.name;
  const item = await findContactDetail(paramsId);

  if (!item) {
    return res.redirect('/notFound');
  }

  res.render('pg/contactDetail', {
    title: 'Contact Detail',
    data: item,
  });
});

app.get('/about', (req, res) => {
  res.render('pg/about', {
    title: 'About page',
  });
});

app.get('/add-contact', (req, res) => {
  const data = { name: '', phone: '', email: '' };
  res.render('pg/contactForm', {
    contact: data,
    title: 'Add Contact',
    type: 'add',
    errors: {},
  });
});

app.post(
  '/create-contact',
  body('name').custom(async (value) => {
    const data = await findContactListPG();

    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('mobile')
    .isMobilePhone('id-ID')
    .withMessage('Phone number is not valid'),
  body('email').isEmail().withMessage('Email is not valid!'),
  (req, res) => {
    const errors = validationResult(req);
    const { name, mobile, email } = req.body;
    const data = { name, mobile, email };

    if (!errors.isEmpty()) {
      return res.render('pg/contactForm', {
        contact: data,
        title: 'Add Contact',
        type: 'add',
        errors: errors.mapped(),
      });
    }

    const contact = {
      name,
      mobile,
      email,
    };
    createContact(contact);
    res.redirect('/contact');
  }
);

app.post('/delete', async (req, res) => {
  const nameId = req.body.name;
  await deleteContact(nameId);
  res.redirect('/contact');
});

app.get('/edit-contact/:name', async (req, res) => {
  const paramsId = req.params.name;
  const data = await findContactDetail(paramsId);
  if (!data) return res.redirect('/notFound');
  res.render('pg/contactForm', {
    contact: data,
    title: 'edit Contact',
    type: 'edit',
    errors: {},
  });
});

app.post(
  '/update-contact',
  body('name').custom(async (value, { req }) => {
    if (value.toLowerCase() === req.body.oldName.toLowerCase()) {
      return true;
    }
    const data = await findContactListPG();
    const findDataInput = data.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );

    if (findDataInput) {
      throw new Error('Name already exist');
    }

    return true;
  }),
  body('mobile')
    .isMobilePhone('id-ID')
    .withMessage('Phone number is not valid'),
  body('email').isEmail().withMessage('Email is not valid!'),
  async (req, res) => {
    const { oldName, name, mobile, email } = req.body;
    const errors = validationResult(req);
    const data = await findContactDetail(oldName);
    const errorObj = errors.mapped();

    if (!errors.isEmpty()) {
      return res.render('pg/contactForm', {
        contact: { ...data, name, oldName, mobile, email },
        title: 'edit Contact',
        type: 'edit',
        errors: errorObj,
      });
    }

    const contact = {
      name: oldName,
      newName: name,
      newMobile: mobile,
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
