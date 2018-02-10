var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  OnlineGrocery = require('./api/models/onlineGroceryModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/OnlineGrocerydb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/onlineGroceryRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Online Grocery RESTful API server started on: ' + port);