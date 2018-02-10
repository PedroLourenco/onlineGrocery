'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrocerySchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  updated: {
    type: Date,
    default: Date.now
  },
});



module.exports = mongoose.model('Grocery', GrocerySchema);