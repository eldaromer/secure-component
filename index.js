//Initialize express app
var express = require("express");
var app = express();
//Interaction Logger
var morgan = require("morgan");
//Json Parser
var bodyParser = require("body-parser");
//Method Override
var methodOverride = require("method-override");
//Initialize Mongoose
var mongoose = require('mongoose');
var Password = require('./backend/models/Password.model');

//App configurations
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

//Connect to local database
mongoose.connect('mongodb://localhost/Secure-Component');

//Initialize router
var router = express.Router();

//Set Routes
router.route('/passwords')
    .post(function (req, res) {

        //Create Password Model and save it
        var password = new Password();

        password.username = req.body.username;
        password.password = req.body.password;

        password.save(function (err) {
            if (err) {
                res.send(err);
            }

            res.json({
                message: 'Password logged',
                password: password.password,
                username: password.username
            });
        });

    })
    .get(function(req, res) {

        //Retrieve all passwords
        Password.find(function (err, passwords) {
            if (err) {
                res.send(err);
            }

            res.json(passwords);
        });
    });

/*Original API test
router.get('/', function(req, res) {
    res.json({message: 'test'});
});*/

//Set Router
app.use('/api', router);

//Start App
app.listen(8000);
console.log("App started");
