const { Adopcion, Perro, Adoptante } = require('../models');

exports.crear = async (req, res) => {
    const { perroid, adoptanteid, fechaadopcion } = req.body;
    try {
        const adopcion = await Adopcion.create({ perroid, adoptanteid, fechaadopcion });
        res.json(adopcion);
    } catch (e) {
        res.json({ mensaje: "Error al crear " });
    }
};

exports.ver = async (req, res) => {
    try {
        const adopciones = await Adopcion.findAll({
            include: [{ model: Perro }, { model: Adoptante }]
        });
        res.json(adopciones);
    } catch (e) {
        res.json({ mensaje: "Error al vers" });
    }
};
