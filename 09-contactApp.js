const express = require('express');
const { getDataContactApi, addData } = require('./model/contact-api.model');
const app = express();
const cors = require('cors');
const { validationResult, body } = require('express-validator');
app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:3000',
};

//GET CONTACTS LIST
app.get('/contact', cors(corsOptions), async (req, res) => {
  try {
    const data = await getDataContactApi();

    res.status(200).json({
      message: 'Success',
      data,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
});

//ADD CONTACT
app.options('/create-contact', cors(corsOptions));
app.post(
  '/create-contact',
  cors(corsOptions),
  body('name').custom(async (value) => {
    const data = await getDataContactApi();

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
  body('email')
    .isEmail()
    .optional({ checkFalsy: true })
    .withMessage('Email is not valid!'),
  (req, res) => {
    const errors = validationResult(req);
    const { name, mobile, email } = req.body;

    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: 'Invalid input',
        statusCode: '401',
        errors: errors.array(),
      });
    }

    const contact = {
      name,
      mobile,
      email,
    };
    addData(contact);

    res.status(201).json({
      message: 'Success',
      statusCode: 201,
    });
  }
);

app.listen(3001, () => {
  console.log('running express in localhost:3001');
});
