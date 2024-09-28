const Auto = require('../models/automodels');

const registrarAuto = async (req, res) => {
    const { marca, año, disponible } = req.body;
    try {
        const nuevoAuto = new Auto({ marca,  año, disponible });
        await nuevoAuto.save();
        res.status(201).json({ mensaje: 'Auto registrado con éxito', auto: nuevoAuto });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar auto', error });
    }
};

const listarAutosDisponibles = async (req, res) => {
    try {
        const autosDisponibles = await Auto.find({ disponible: true });
        res.status(200).json(autosDisponibles);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al listar autos disponibles', error });
    }
};

module.exports = { registrarAuto, listarAutosDisponibles };
