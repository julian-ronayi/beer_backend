const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('CONNECTED');
});

mongoose.connection.on('error', (err) => {
  console.log('CONNECTION ERROR', err);
});
