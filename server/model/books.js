let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    name: String,
    email: String,
    contact: Number
},

{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);