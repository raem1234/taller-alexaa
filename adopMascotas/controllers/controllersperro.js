const { Perro } = require('../models');

exports.crearDog= async (req, res) => {
    const { nombre, raza, edad, tamaño, estado } = req.body;
    try {
        const Dog = await Perro.create({ nombre, raza, edad, tamaño, estado });
        res.json(Dog);
    } catch (e) {
        res.json({ mensaje: "Error al crear " });
    }
};

exports.verDog = async (req, res) => {
    try {
        const perros = await Perro.findAll();
        res.json(perros);
    } catch (e) {
        res.json({ mensaje: "Error al ver" });
    }
};