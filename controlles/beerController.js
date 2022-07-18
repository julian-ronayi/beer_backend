const { Beer } = require('../models');

const getBeerList = (req, res) => {
  Beer.find((err, data) => {
    if (err) {
      throw err;
      res.status(500).send({
        message: JSON.stringify(err),
      })
    }

    res.send(data);
  });
}

const getBeer = (req, res) => {
  const {
    params: { id },
  } = req;

  Beer.find({ _id: id },  (err, data) => {
    if (err) {
      throw err;
      res.status(500).send({
        message: JSON.stringify(err),
      })
    }

    res.send(data[0]);
  });
}

const createBeer = (req, res) => {
  const data = req.body;

  Beer.create(data, function (err) {
    if (err) {
      throw err;
      res.status(500).send({
        message: JSON.stringify(err),
      })
    }

    res.status(201).send({
      message: 'OK',
    });
  })
}

const updateBeer = (req, res) => {
  const data = req.body;
  const {
    params: { id },
  } = req;

  Beer.updateOne({ _id: id }, data, function (err, responseData) {
    if (err) {
      throw err;
      res.status(500).send({
        message: JSON.stringify(err),
      })
    }

    res.send(responseData);
  })
}

const deleteBeer = (req, res) => {
  const {
    params: { id },
  } = req;

  Beer.deleteOne({ _id: id },  (err, data) => {
    if (err) {
      throw err;
      res.status(500).send({
        message: JSON.stringify(err),
      })
    }

    res.status(204).send({
      message: 'OK'
    });
  });
}


module.exports = {
  getBeer,
  getBeerList,
  createBeer,
  updateBeer,
  deleteBeer,
}
