const express = require('express');
const app = express();
const cors = require('cors');
const { ORIGIN_URL, PORT_LISTEN } = require('./lib/configEnv.js');
const errorHandler = require('./middleware/errorHandling.js');

//Contact Routes
const contactRoutes = require('./routes/contact.route.js');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
  origin: ORIGIN_URL,
};

app.use(cors(corsOptions));

app.use(contactRoutes);

app.use(errorHandler);

app.listen(PORT_LISTEN, () => {
  console.log(`running express in localhost:${PORT_LISTEN}`);
});
