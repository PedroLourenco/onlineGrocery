'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GrocerySchema = new Schema({
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
    }
});

module.exports = mongoose.model('Grocery', GrocerySchema);