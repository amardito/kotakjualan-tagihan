const mongoose = require('mongoose');

// const billschema = mongoose.Schema({});
const billschema = mongoose.Schema({
    idToko : {type : String},
    idAnggota: {type: String},
    createdAt: {type: Date},
    item: Array,
    status: {type: Boolean},
    totalTagihan: {type: Number}
});

module.exports = mongoose.model('Bill', billschema);