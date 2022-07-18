const { Schema } = require('mongoose');

const BeerSchema = new Schema({
  title:  String,
  description:  String,
  photo: {
    data: Buffer,
    contentType: String
  },
  price: Number,
  isAlcoholic: Boolean
});

module.exports = BeerSchema;
