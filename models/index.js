const mongoose = require('mongoose');

const BeerSchema = require('./Beer');
const Beer = mongoose.model('Beer', BeerSchema);

module.exports = {
  Beer,
}
