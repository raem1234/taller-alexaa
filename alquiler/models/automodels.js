const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    año: { type: Number, required: true },
    disponible: { type: String, required: true }
}, { collection: 'Auto' }); 

module.exports = mongoose.model('Auto', autoSchema);
