const { Adoptante } = require('../models');

exports.crearAdo = async (req, res) => {
    const { nombre, correo, direccion } = req.body;
    try {
        const adoptar = await adoptar.create({ nombre, correo, direccion });
        res.json(adoptar);
    } catch (e) {
        res.json({ mensaje: "Error al crear" });
    }
};

exports.verAdop = async (req, res) => {
    try {
        const adoptantes = await Adoptante.findAll();
        res.json(adoptantes);
    } catch (e) {
        res.json({ mensaje: "Error al asignar adoptante" });
    }
};
