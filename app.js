var  express = require('express')
  , app = express() // Web framework to handle routing requests
  , cons = require('consolidate') // Templating library adapter for Express
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require('./routes'); // Routes for our application
    // in order to include css
    app.use(express.static(__dirname + '/public'));


//2015 MongoClient.connect('mongodb://psi-heroku:bollersaftogburritos@paulo.mongohq.com:10015/psi', function(err, db) {
 MongoClient.connect('mongodb://localhost:27017/psi', function(err, db) {	
    "use strict";
    if(err) throw err;

    // Register our templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');


    // Express middleware to populate 'req.cookies' so we can access cookies
    app.use(express.cookieParser());

    //app.use(express.logger());
    // Express middleware to populate 'req.body' so we can access POST variables
    app.use(express.bodyParser());

    // Application routes
    routes(app, db);

    var port = process.env.PORT || 27017;
    app.listen(port);
    console.log('Express server listening on port ' + port );
});