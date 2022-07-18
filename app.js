const express = require('express');
const app = express();
const router = require('./router');

require('./db/connection');
const { PORT } = require('./config');

app.use('/beers', router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
