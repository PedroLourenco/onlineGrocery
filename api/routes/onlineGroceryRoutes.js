'use strict';
module.exports = function(app) {
    var onlineGrocery = require('../controllers/onlineGroceryController');

    app.route('/products')
        .post(onlineGrocery.create_products)
        .get(onlineGrocery.list_all_products);

    app.route('/product/:productName')
        .get(onlineGrocery.read_a_product)
        .put(onlineGrocery.update_a_product);
};