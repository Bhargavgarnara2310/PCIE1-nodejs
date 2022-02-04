const mongoose = require('mongoose');
const vehicleSchema = mongoose.Schema({
    bname: String,
    price: Number,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);