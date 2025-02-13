const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home page',
    nama: 'Dena',
  });
});

app.get('/contact', (req, res) => {
  const cont = [
    {
      name: 'Dena',
      email: 'Dena@test.com',
    },
    {
      name: 'Dena2',
      email: 'Dena2@test.com',
    },
    {
      name: 'Dena3',
      email: 'Dena3@test.com',
    },
  ];
  res.render('contact', { title: 'Contact page', cont });
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
