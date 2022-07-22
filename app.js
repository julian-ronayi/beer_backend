const express = require('express');
const cors = require('cors');
const app = express();
const { beersRouter, usersRouter } = require('./router');

require('./db/connection');
const { PORT } = require('./config');

app.use(cors());
app.use('/beers', beersRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
