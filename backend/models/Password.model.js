//Initialize mongoose and schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Schema for password object
var PasswordSchema = new Schema ({
    username: String,
    password: String
});

//Export model
module.exports = mongoose.model('Password', PasswordSchema);