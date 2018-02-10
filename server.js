var express = require('express'),
    app = express(),
    port = 3000;
    mongoose = require('mongoose'),
    OnlineGrocery = require('./api/models/onlineGroceryModel'),
    bodyParser = require('body-parser');
 
// mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/OnlineGrocerydb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing route
var routes = require('./api/routes/onlineGroceryRoutes');
routes(app);


app.listen(port);


console.log('Online Grocery RESTful API server started on: ' + port);