const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const beersController = require('./controlles/beerController');

router.get('/', beersController.getBeerList);

router.post('/', bodyParser.json(), beersController.createBeer);

router.get('/:id', beersController.getBeer);

router.put('/:id', bodyParser.json(), beersController.updateBeer);

router.delete('/:id', beersController.deleteBeer);

module.exports = router;
