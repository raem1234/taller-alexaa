const Alquiler = require('../models/alquilermodels');
const Auto = require('../models/automodels');

const realizarAlquiler = async (req, res) => {
    const { clienteId, autoId } = req.body; 
    try {
        const auto = await Auto.findById(autoId); 
        if (!auto || auto.disponible === "false") {
            return res.status(400).json({ mensaje: 'El auto no está disponible para alquiler' });
        }

        const nuevoAlquiler = new Alquiler({ cliente: clienteId, auto: autoId }); 
        await nuevoAlquiler.save(); 

        auto.disponible = "false"; 
        await auto.save(); 

        res.status(201).json({ mensaje: 'Alquiler realizado con éxito', alquiler: nuevoAlquiler }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al realizar alquiler', error }); 
    }
};

const historialAlquileres = async (req, res) => {
    try {
        const alquileres = await Alquiler.find().populate('cliente').populate('auto');
        res.status(200).json(alquileres);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al listar historial de alquileres', error });
    }
};

module.exports = { realizarAlquiler, historialAlquileres };
