const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const usersController = require('../controlles/usersController');

router.post('/login', bodyParser.json(), usersController.login);
router.post('/check-token', bodyParser.json(), usersController.checkToken);

module.exports = router;
