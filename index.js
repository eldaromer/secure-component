var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var Password = require('./backend/models/Password.model');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect('mongodb://localhost/Secure-Component');

var router = express.Router();

router.route('/passwords')
    .post(function (req, res) {

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
        Password.find(function (err, passwords) {
            if (err) {
                res.send(err);
            }

            res.json(passwords);
        });
    });

router.get('/', function(req, res) {
    res.json({message: 'test'});
});

app.use('/api', router);

app.listen(8000);
console.log("App started");
