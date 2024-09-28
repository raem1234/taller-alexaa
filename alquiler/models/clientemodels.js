const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { collection: 'Cliente' });

module.exports = mongoose.model('Cliente', clienteSchema);
