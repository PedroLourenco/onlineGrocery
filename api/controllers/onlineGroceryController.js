'use strict'


var mongoose = require('mongoose'),
    Grocery = mongoose.model('Grocery');

exports.create_products = function(req, res) {
    // Remove the collection
    Grocery.remove({}, function(err) {
        if (err) {
            res.send(err);
        }

        // Start adding the new data
        Grocery.collection.insert(req.body, onInsert);

        function onInsert(err, products) {
            if (err) {
                res.send(err);
            }

            res.json(products);
        }
    });
};

exports.list_all_products = function(req, res) {
    Grocery.find({}).sort({updated: 'desc'}).exec(function(err, products) {
        if (err) {
            res.send(err);
        }

        res.json(products);
    });
};

exports.read_a_product = function(req, res) {
    Grocery.find({name: req.params.productName}, function(err, product) {
        if (err) {
            res.send(err);
        }

        res.json(product);
    });
};

exports.update_a_product = function(req, res) {
    Grocery.findOne({name: req.params.productName}, function (err, product) {
        // Check if we have the price property and proceed with the update
        if (req.body.price) {
            product.price = req.body.price;
            product.updated = Date.now();
            
            product.save(function (err) {
                if(err) {
                    res.send(err);
                }

                res.json(product);
            });
        } else {
            res.send("Could not update product with name " + req.params.productName);
        }
    });
};