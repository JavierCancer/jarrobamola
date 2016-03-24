/**
 * Created by bernat on 24/03/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
    nombre: String,
    apellido: String,
    edad: String
});