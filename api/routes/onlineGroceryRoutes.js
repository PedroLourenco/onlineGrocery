'use strict';
module.exports = function(app) {
  var onlineGrocery = require('../controllers/onlineGroceryController');

  // onlineGrocery Routes
  app.route('/products')
    .get(onlineGrocery.list_all_products)
    .post(onlineGrocery.create_products);


  app.route('/listproducts/:productName')
    .get(onlineGrocery.read_a_product)
    .put(onlineGrocery.update_a_product);
};