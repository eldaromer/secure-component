var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PasswordSchema = new Schema ({
    username: String,
    password: String
});

module.exports = mongoose.model('Password', PasswordSchema);