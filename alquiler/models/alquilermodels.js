const mongoose = require('mongoose');

const alquilerSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    auto: { type: mongoose.Schema.Types.ObjectId, ref: 'Auto', required: true },
    fechaAlquiler: { type: Date, default: Date.now }
}, { collection: 'alquileres' });

module.exports = mongoose.model('alquileres', alquilerSchema);
