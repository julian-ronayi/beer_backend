const { Schema } = require('mongoose');

const BeerSchema = new Schema({
  title:  String,
  description:  String,
  photoUrl: String,
  price: Number,
  isAlcoholic: Boolean
});

module.exports = BeerSchema;
